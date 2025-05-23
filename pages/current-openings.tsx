import Head from "next/head";
import { appName } from "app-config";
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";
import PageHeader from "components/layouts/PageHeader";
import SidebarContent from "components/layouts/SidebarContent";
import { ChangeEvent, useEffect, useState } from "react";
import { Option, fold, isSome, none, some } from "fp-ts/lib/Option";
import { IJobAddApiRequest, IJobApplyApiRequest, IJobDetails } from "models/job";
import { isFailure, isSuccess } from "@devexperts/remote-data-ts";
import { toast } from "react-toastify";
import { JobService } from "services/job/index.service";
import { pipe } from "fp-ts/lib/function";
import LoadingData from "uiComponents/LoadingData";
import { Modal } from "uiComponents/Modal";
import { useForm } from "react-hook-form";
import { fileUpload } from "utils/file.util";
import Swal from "sweetalert2";
import { unWrapOption } from "utils/option.utils";
import SecureReactCaptcha from 'secure-react-captcha';
import { FormButton, FormInput, FormSelect, FormTextarea } from "uiComponents/Form";

export default function Page() {
	const {
		register,
		watch,
		handleSubmit,
		getValues,
		setValue,
		formState: { errors },
	} = useForm<IJobApplyApiRequest>({
		defaultValues: {
			vchJobCandPostUid: '',
			vchJobCandFname: '',
			vchJobCandLname: '',
			dtmJobCandDob: '',
			vchJobCandAddr: '',
			vchJobCandCurLoc: '',
			vchJobCandPhone1: '',
			vchJobCandPhone2: '',
			vchJobCandEmail: '',
			vchJobCandHighQual: '',
			intJobCandExpYear: -1,
			intJobCandExpMonth: -1,
			vchJobCandLetter: '',
			vchJobCandResume: '',
		},
	});
	const [isProcessing, setIsProcessing] = useState<Option<boolean>>(none)
	const [isCaptchaClicked, setIsCaptchaClicked] = useState<Option<boolean>>(none)
	const [captchaValidated, setCaptchaValidated] = useState<Option<boolean>>(none)
	const [arrData, setArrData] = useState<Option<Array<IJobDetails>>>(none);
	const [tmpFiles, setTmpFiles] = useState<FileList | null>(null);

	useEffect(() => {
		const run = async () => await loadData();
		run();
	}, []);

	const handleValidation = (isValid: boolean) => {
		setCaptchaValidated(some(isValid));
	};


	const loadData = async () => {
		setIsProcessing(some(true));
		let result = await JobService.all(0, 1);
		setIsProcessing(none);
		if (isSuccess(result)) {
			if (result.value.successful) {
				setArrData(some(result.value.data || []));
			} else {
				toast.error(result.value.message);
			}
		} else if (isFailure(result)) {
			toast.error(result.error.outcome);
		}
	};

	const formSubmit = async (data: IJobApplyApiRequest) => {
		console.log(data)
		setIsProcessing(some(true))
		if (tmpFiles) {
			setValue("vchJobCandResume", '');
			let cvFile = ''
			for (let i = 0; i < tmpFiles.length; i++) {
				let file = tmpFiles[i];
				let uploadRes = await fileUpload("/cv", file, {}, true);
				if (isSuccess(uploadRes) && uploadRes.value.successful) {
					setValue("vchJobCandResume", uploadRes.value.data);
					cvFile = uploadRes.value.data
				}
			}
			setTmpFiles(null);
			if (cvFile) {
				let result = await JobService.applyOnline({
					...data, vchJobCandResume: cvFile
				});
				setIsProcessing(none);
				if (isSuccess(result)) {
					if (result.value.successful) {
						Swal.fire({
							title: "Applied Successfully",
							text: "Thank you! We will review and get back to you soon",
							icon: "success",
						})
						closeModal()
					} else {
						toast.error(result.value.message);
					}
				} else if (isFailure(result)) {
					toast.error(result.error.outcome);
				}
			} else {
				toast.error('CV upload failed')
			}
		} else {
			toast.error('Please upload your CV')
		}

		setIsProcessing(none)
	};

	const closeModal = () => {
		setValue('vchJobCandPostUid', '')
		setValue('vchJobCandFname', '')
		setValue('vchJobCandLname', '')
		setValue('dtmJobCandDob', '')
		setValue('vchJobCandAddr', '')
		setValue('vchJobCandCurLoc', '')
		setValue('vchJobCandPhone1', '')
		setValue('vchJobCandPhone2', '')
		setValue('vchJobCandEmail', '')
		setValue('vchJobCandHighQual', '')
		setValue('intJobCandExpYear', -1)
		setValue('intJobCandExpMonth', -1)
		setValue('vchJobCandLetter', '')
		setValue('vchJobCandResume', '')
		setTmpFiles(null);
	}

	const getPosition = () => {
		let res = ''
		if (isSome(arrData)) {
			let arr = arrData.value.filter(i => i.vchJobUid == getValues('vchJobCandPostUid'))
			if (arr.length > 0) {
				res = String(arr[0].vchJobPosition)
			}
		}
		return res
	}

	const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) setTmpFiles(e.target.files);
	};

	watch()

	return (
		<>
			<Head>
				<title>{`Current Openings - ${appName}`}</title>
			</Head>
			<Header />
			<PageHeader title="Current Openings" breadcrumbs={[
				{ name: 'Career', link: '#' },
				{ name: 'Current Openings', link: '' },
			]} />


			<SidebarContent navFor="Careers">
				<h2>Current Openings</h2>
				<div className="blue-line mt-2 mb-4"></div>

				{pipe(
					arrData,
					fold(
						() => [
							<div key={"loading"}>
								<LoadingData />
							</div>,
						],
						(arrData) =>
							(arrData).length === 0
								? [
									<h4 key={"noData"}>
										Currently we have no vacancies
									</h4>,
								]
								: [
									<div key={'data'}>
										{arrData.map((i, k) => <div key={k} className="table-responsive">
											<table className="table table-sm table-borderless">
												<tbody>
													<tr>
														<td width={120}><div><strong>Position</strong></div></td>
														<td className="text-center" width={20}>:</td>
														<td><div className="text-danger" style={{ fontSize: '20px' }}><strong>{i.vchJobPosition}</strong></div></td>
													</tr>
													<tr>
														<td><div><strong> Job code</strong></div></td>
														<td className="text-center" width={20}>:</td>
														<td>{i.vchJobCode}</td>
													</tr>
													<tr>
														<td><div><strong> Location</strong></div></td>
														<td className="text-center" width={20}>:</td>
														<td>{i.vchLocName}</td>
													</tr>
													<tr>
														<td><div><strong> Qualification</strong></div></td>
														<td className="text-center" width={20}>:</td>
														<td>{i.vchJobQualification}</td>
													</tr>
													<tr>
														<td><div><strong> Responsibility</strong></div></td>
														<td className="text-center" width={20}>:</td>
														<td>
															<div className="no-ul-mp" dangerouslySetInnerHTML={{ __html: String(i.vchJobResponsibility) }} />
															<div className="d-flex mt-4">
																<button onClick={() => setValue('vchJobCandPostUid', String(i.vchJobUid))} className="btn btn-primary">Apply Now</button>
															</div>
														</td>
													</tr>

												</tbody>
											</table>
											{k < arrData.length - 1 && <hr />}
										</div>)}
									</div>
								]
					)
				)}
			</SidebarContent>

			<Footer />

			<Modal show={getValues('vchJobCandPostUid') != ''} action={() => closeModal()} title={"Apply Online For " + getPosition()}>
				<form onSubmit={handleSubmit(formSubmit)}>
					<div className="form-row">
						<div className="form-group col-md-4">
							<label htmlFor="vchJobCandFname">First Name</label>
							<input {...register("vchJobCandFname", { required: "First name is  required." })} className="form-control" id="vchJobCandFname" />
							{errors.vchJobCandFname && <div className="error xs-text">{errors.vchJobCandFname.message}</div>}
						</div>
						<div className="form-group col-md-4">
							<label htmlFor="vchJobCandLname">Last Name</label>
							<input {...register("vchJobCandLname", { required: "Last name is  required." })} className="form-control" id="vchJobCandLname" />
							{errors.vchJobCandLname && <div className="error xs-text">{errors.vchJobCandLname.message}</div>}
						</div>
						<div className="form-group col-md-4">
							<label htmlFor="dtmJobCandDob">Date Of Birth</label>
							<input type="date" {...register("dtmJobCandDob", { required: "Date Of Birth is  required." })} className="form-control" id="dtmJobCandDob" />
							{errors.dtmJobCandDob && <div className="error xs-text">{errors.dtmJobCandDob.message}</div>}
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="vchJobCandAddr">Address</label>
						<textarea {...register("vchJobCandAddr")} className="form-control" id="vchJobCandAddr" />
					</div>
					<div className="form-group">
						<label htmlFor="vchJobCandCurLoc">Current Location</label>
						<input {...register("vchJobCandCurLoc", { required: "Current Location is  required." })} className="form-control" id="vchJobCandCurLoc" />
						{errors.vchJobCandCurLoc && <div className="error xs-text">{errors.vchJobCandCurLoc.message}</div>}
					</div>
					<div className="form-row">
						<div className="form-group col-md-4">
							<label htmlFor="vchJobCandPhone1">Phone Number</label>
							<input {...register("vchJobCandPhone1")} className="form-control" id="vchJobCandPhone1" />
						</div>

						<div className="form-group col-md-4">
							<label htmlFor="vchJobCandPhone2">Mobile Number</label>
							<input {...register("vchJobCandPhone2", { required: "Mobile Number is  required." })} className="form-control" id="vchJobCandPhone2" />
							{errors.vchJobCandPhone2 && <div className="error xs-text">{errors.vchJobCandPhone2.message}</div>}
						</div>
						<div className="form-group col-md-4">
							<label htmlFor="vchJobCandEmail">Email ID</label>
							<input {...register("vchJobCandEmail", { required: "Email ID is  required." })} className="form-control" id="vchJobCandEmail" />
							{errors.vchJobCandEmail && <div className="error xs-text">{errors.vchJobCandEmail.message}</div>}
						</div>
					</div>
					<div className="form-row">
						<div className="form-group col-md-4">
							<label htmlFor="vchJobCandHighQual">Highest Qualification</label>
							<input {...register("vchJobCandHighQual", { required: "Highest Qualification is  required." })} className="form-control" id="vchJobCandHighQual" />
							{errors.vchJobCandHighQual && <div className="error xs-text">{errors.vchJobCandHighQual.message}</div>}
						</div>
						<div className="col-md-8">
							<div className="form-row">
								<div className="form-group col-md-6">
									<label htmlFor="intJobCandExpYear">Experience</label>
									<select {...register("intJobCandExpYear")} className="form-control" id="intJobCandExpYear">
										<option value="-1">Select Year</option>
										{[...new Array(21).keys()].map((i, k) => <option key={k} value={i}>{i}</option>)}
									</select>
								</div>
								<div className="form-group col-md-6">
									<div className="d-flex align-items-end h-100">
										<select {...register("intJobCandExpMonth")} className="form-control" id="intJobCandExpMonth">
											<option value="-1">Select Month</option>
											{[...new Array(12).keys()].map((i, k) => <option key={k} value={i}>{i}</option>)}
										</select>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="vchJobCandLetter">Covering Letter</label>
						<textarea {...register("vchJobCandLetter")} className="form-control" id="vchJobCandLetter" rows={5} />
					</div>
					<div className="form-group">
						<label htmlFor="vchJobCandResume">Upload CV</label>
						<div>
							<input type="file" multiple name="vchJobCandResume" id="vchJobCandResume" onChange={(e) => handleFileUpload(e)} accept="application/pdf" />
						</div>
					</div>
					<div className="form-group">
						<div onClick={() => setIsCaptchaClicked(some(true))}>
							<SecureReactCaptcha setValidated={handleValidation} />
						</div>
						{isSome(isCaptchaClicked) && <> {unWrapOption(captchaValidated, () => false) === false && <div className="invalid-feedback text-center d-block">Invalid captcha</div>} </>}
					</div>
					<hr />
					<div className="d-flex justify-content-end">
						<button type="button" onClick={() => closeModal()} className="btn btn-danger mr-3">Close</button>
						{/* <button disabled={isSome(isProcessing)} className="btn btn-primary">Submit</button> */}
						<div className="d-flex justify-content-center" onClick={() => setIsCaptchaClicked(some(true))}>
							<FormButton disabled={isSome(isProcessing)} text="Submit" className="btn btn-primary" />
						</div>
					</div>
				</form>
			</Modal>

		</>
	);
}
