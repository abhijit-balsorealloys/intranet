import { Option, isSome, none, some } from "fp-ts/lib/Option";
import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { unWrapOption } from "utils/option.utils";
import SecureReactCaptcha from 'secure-react-captcha';
import { FormButton, FormInput, FormSelect, FormTextarea } from "uiComponents/Form";

interface ICustomerComplaintForm {
  complaintDetails: string;
  consignment: string;
  companyName: string;
  name: string;
  emailID: string;
  mobile: string;
}

const CustomerComplaintForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ICustomerComplaintForm>({
    defaultValues: {
      complaintDetails: '',
      consignment: '',
      companyName: '',
      name: '',
      emailID: '',
      mobile: '',
    },
  });
  const [isProcessing, setIsProcessing] = useState<Option<boolean>>(none)
  const [isCaptchaClicked, setIsCaptchaClicked] = useState<Option<boolean>>(none)
  const [captchaValidated, setCaptchaValidated] = useState<Option<boolean>>(none)

  const handleValidation = (isValid: boolean) => {
    setCaptchaValidated(some(isValid));
  };

  const formSubmit = (data: ICustomerComplaintForm) => {
    setIsProcessing(some(true))
    console.log(data)
    if (unWrapOption(captchaValidated, () => false)) {
      alert('Development is in progress! it will work in LIVE')
    }
    setIsProcessing(none)
  };
  watch();
  return (

    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="row mb-2">
            <div className="col-md-4 font-weight-bold">Complaint Details :</div>
            <div className="col-md-8">
              <input {...register("complaintDetails", { required: "Complaint Details is  required" })} className="form-control" id="fullName" />
              {errors.complaintDetails && <p className="error">{errors.complaintDetails.message}</p>}
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-4 font-weight-bold">Consignment Details ( Invoice No/ Contract No) :</div>
            <div className="col-md-8">
              <input {...register("consignment", { required: "Consignment Details is  required" })} className="form-control" id="fullName" />
              {errors.consignment && <p className="error">{errors.consignment.message}</p>}
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-4 font-weight-bold">Your Company Name :</div>
            <div className="col-md-8">
              <input {...register("companyName", { required: "Company Name is  required" })} className="form-control" id="fullName" />
              {errors.companyName && <p className="error">{errors.companyName.message}</p>}
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-4 font-weight-bold">Your Name :</div>
            <div className="col-md-8">
              <input {...register("name", { required: "Your Name is  required" })} className="form-control" id="fullName" />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>
          </div>


          <div className="row mb-2">
            <div className="col-md-4 font-weight-bold">Email ID :</div>
            <div className="col-md-8">
              <input {...register("emailID", { required: "Email Id is  required." })} className="form-control" id="emailID" />
              {errors.emailID && <p className="error">{errors.emailID.message}</p>}
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-4 font-weight-bold">Mobile Number :</div>
            <div className="col-md-8">
              <input {...register("mobile", { required: "Mobile Number is  required." })} className="form-control" id="emailID" />
              {errors.mobile && <p className="error">{errors.mobile.message}</p>}
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-4 font-weight-bold"></div>
            <div className="col-md-8">
              <div className="my-3">
                <div onClick={() => setIsCaptchaClicked(some(true))}>
                  <SecureReactCaptcha setValidated={handleValidation} />
                </div>
                {isSome(isCaptchaClicked) && <> {unWrapOption(captchaValidated, () => false) === false && <div className="invalid-feedback text-center d-block">Invalid captcha</div>} </>}
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-4 font-weight-bold"></div>
            <div className="col-md-8">
              <div className="d-flex justify-content-center" onClick={() => setIsCaptchaClicked(some(true))}>
                <FormButton disabled={isSome(isProcessing)} text="Send Message" className="btn btn-primary" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
};
export default CustomerComplaintForm;