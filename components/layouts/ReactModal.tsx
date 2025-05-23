import { Option, isSome, none, some } from "fp-ts/lib/Option";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useForm } from 'react-hook-form';
import { unWrapOption } from "utils/option.utils";
import SecureReactCaptcha from 'secure-react-captcha';
import { FormButton, FormInput, FormSelect, FormTextarea } from "uiComponents/Form";

interface IReactModal {
  position: string;
  full_name: string;
  dob: string;
  address: string;
  location: string;
  mobile: string;
  qualification: string;
  emailID: string;
  experience_year: string;
  experience_month: string;
  cover_letter: string;
  resume: string;
}
const ReactModalForm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IReactModal>({
    defaultValues: {
      position: '',
      full_name: '',
      dob: '',
      address: '',
      location: '',
      mobile: '',
      qualification: '',
      emailID: '',
      experience_year: '',
      experience_month: '',
      cover_letter: '',
      resume: '',
    },
  });
  const [isProcessing, setIsProcessing] = useState<Option<boolean>>(none)
  const [isCaptchaClicked, setIsCaptchaClicked] = useState<Option<boolean>>(none)
  const [captchaValidated, setCaptchaValidated] = useState<Option<boolean>>(none)

  const handleValidation = (isValid: boolean) => {
    setCaptchaValidated(some(isValid));
  };

  const formSubmit = (data: IReactModal) => {
    setIsProcessing(some(true))
    console.log(data)
    if (unWrapOption(captchaValidated, () => false)) {
      alert('Development is in progress! it will work in LIVE')
    }
    setIsProcessing(none)
  };

  watch();

  return (
    <>
      <Button className="red-btn text-light ar-size" onClick={handleShow}>
        Apply Now
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Application Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <form onSubmit={handleSubmit(formSubmit)}>
                <span className="text-center"><div className="blue-line mt-2 mb-4"></div></span>
                <div className="row mb-2">
                  <div className="col-md-4 font-weight-bold">Position :</div>
                  <div className="col-md-8">
                    <input {...register("position", { required: "Position is Required" })} className="form-control" id="position" />
                    {errors.position && <p className="error">{errors.position.message}</p>}
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-4 font-weight-bold">Full name :</div>
                  <div className="col-md-8">
                    <input {...register("full_name", { required: "Full Name is Required" })} className="form-control" id="full_name" />
                    {errors.full_name && <p className="error">{errors.full_name.message}</p>}
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-4 font-weight-bold">Date Of Birth :</div>
                  <div className="col-md-8">
                    <input {...register("dob", { required: "Email Id is  required" })} className="form-control" id="dob" />
                    {errors.dob && <p className="error">{errors.dob.message}</p>}
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-4 font-weight-bold">Address :</div>
                  <div className="col-md-8">
                    <textarea {...register("address", { required: "Address is  required" })} className="form-control" id="address" rows={10} ></textarea>
                    {errors.address && <p className="error">{errors.address.message}</p>}
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-4 font-weight-bold">Your  Location :</div>
                  <div className="col-md-8">
                    <input {...register("location", { required: "Contact Number is  required." })} className="form-control" id="location" />
                    {errors.location && <p className="error">{errors.location.message}</p>}
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-4 font-weight-bold">Mobile Number :</div>
                  <div className="col-md-8">
                    <input {...register("mobile", { required: "Mobile Number is  required." })} className="form-control" id="mobile" />
                    {errors.mobile && <p className="error">{errors.mobile.message}</p>}
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-4 font-weight-bold">Highest Qualification :</div>
                  <div className="col-md-8">
                    <input {...register("qualification", { required: "Candidate Highest Qualification is required" })}
                      placeholder="" className="form-control"
                    />
                    {errors.qualification && <p className="error">{errors.qualification.message}</p>}
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-4 font-weight-bold">Email Address :</div>
                  <div className="col-md-8">
                    <input {...register("emailID", { required: "Email Address is  required." })} className="form-control" id="emailID" />
                    {errors.emailID && <p className="error">{errors.emailID.message}</p>}
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-4 font-weight-bold">Total Experience :</div>
                  <div className="col-md-8">
                    <select {...register("experience_year", { required: "Select Experience Year is required" })}
                      className="custom-select custom-select-width"
                      id="selectmethod"
                      defaultValue="">
                      <option value="">Select Year</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                    </select>
                    {errors.experience_year && <span className="error">{errors.experience_year.message}</span>}
                    <select {...register("experience_month", { required: "Select Experience Month is required" })}
                      className="custom-select custom-select-width"
                      id="selectmethod"
                      defaultValue="">
                      <option value="">Select Month</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                    </select>
                    {errors.experience_month && <span className="error">{errors.experience_month.message}</span>}
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-4 font-weight-bold">Covering Letter :</div>
                  <div className="col-md-8">
                    <textarea {...register("cover_letter", { required: "Covering Letter is  required." })} className="form-control" id="cover_letter" rows={10} ></textarea>
                    {errors.cover_letter && <p className="error">{errors.cover_letter.message}</p>}
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-4 font-weight-bold">Upload Resume :</div>
                  <div className="col-md-8">
                    <input {...register("resume", { required: "Upload Resume is  required." })} className="form-control" type="file" id="resume" />
                    {errors.resume && <p className="error">{errors.resume.message}</p>}
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-4 font-weight-bold"></div>
                  <div className="col-md-8">
                    <div className="d-flex justify-content-center" onClick={() => setIsCaptchaClicked(some(true))}>
                      <FormButton disabled={isSome(isProcessing)} text="Send Message" className="btn btn-primary" />
                    </div>
                    {/* <button disabled={isSome(isProcessing)} className="btn btn-primary text-center">Send Message</button> */}
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-2"></div>
          </div>

        </Modal.Body>
        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ReactModalForm;