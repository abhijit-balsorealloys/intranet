import { Option, isNone, isSome, none, some } from "fp-ts/lib/Option";
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { unWrapOption } from "utils/option.utils";
import SecureReactCaptcha from 'secure-react-captcha';
import { FormButton, FormInput, FormSelect, FormTextarea } from "uiComponents/Form";

interface ICustomerEnquiryForm {
  companyName: string;
  address: string;
  emailID: string;
  phNum: string;
  contactPerson: string;
  product: string;
  unit: string;
  physical_specs: string;
  requirement: string;
  remarks: string;
}
const CustomerEnquiryProductForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ICustomerEnquiryForm>({
    defaultValues: {
      companyName: '',
      address: '',
      emailID: '',
      phNum: '',
      contactPerson: '',
      product: '',
      unit: '',
      physical_specs: '',
      requirement: '',
      remarks: '',
    },
  });
  const [isProcessing, setIsProcessing] = useState<Option<boolean>>(none)
  const [isCaptchaClicked, setIsCaptchaClicked] = useState<Option<boolean>>(none)
  const [captchaValidated, setCaptchaValidated] = useState<Option<boolean>>(none)

  const handleValidation = (isValid: boolean) => {
    setCaptchaValidated(some(isValid));
  };

  const formSubmit = (data: ICustomerEnquiryForm) => {
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
        <div className="mb-5">
          <h3 className="pt-5">Customer Enquiry Product Form</h3>
          <span className="text-center pb-5"><div className="blue-line mt-2 mb-4"></div></span>
        </div>
        <form onSubmit={handleSubmit(formSubmit)} className="mb-5">
          <div className="row mb-2">
            <div className="col-md-4 font-weight-bold">Company Name :</div>
            <div className="col-md-8">
              <input {...register("companyName", { required: "Company Name is  required" })} className="form-control" id="fullName" />
              {errors.companyName && <p className="error">{errors.companyName.message}</p>}
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
            <div className="col-md-4 font-weight-bold">Email ID :</div>
            <div className="col-md-8">
              <input {...register("emailID", { required: "Email Id is  required." })} className="form-control" id="emailID" />
              {errors.emailID && <p className="error">{errors.emailID.message}</p>}
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-4 font-weight-bold">Mobile Number :</div>
            <div className="col-md-8">
              <input {...register("phNum", { required: "Mobile Number is  required." })} className="form-control" id="emailID" />
              {errors.phNum && <p className="error">{errors.phNum.message}</p>}
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-4 font-weight-bold">Contact Person :</div>
            <div className="col-md-8">
              <input {...register("contactPerson", { required: "Contact Person is  required" })} className="form-control" id="fullName" />
              {errors.contactPerson && <p className="error">{errors.contactPerson.message}</p>}
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-4 font-weight-bold">Product  :</div>
            <div className="col-md-8">
              <select {...register("product", { required: "Product is Required" })}
                className="custom-select"
                id="selectmethod"
                defaultValue="">
                <option value="">Select Option</option>
                <option value="Ferro Chrome">Ferro Chrome</option>
                <option value="Charge Chrome">Charge Chrome</option>
              </select>
              {errors.product && <span className="error">{errors.product.message}</span>}
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-4 font-weight-bold">Unit of Measure  :</div>
            <div className="col-md-8">
              <select {...register("unit", { required: "Unit Of Measure field is required" })}
                className="custom-select"
                id="selectmethod"
                defaultValue="">
                <option value="">Select Option</option>
                <option value="MT">MT</option>
              </select>
              {errors.unit && <span className="error">{errors.unit.message}</span>}
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-4 font-weight-bold">Physical / Chemical Specs Desired :</div>
            <div className="col-md-8">
              <input {...register("physical_specs", { required: "Physical / Chemical Specs is  required" })} className="form-control" id="fullName" />
              {errors.physical_specs && <p className="error">{errors.physical_specs.message}</p>}
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-4 font-weight-bold">Requirement / Month :</div>
            <div className="col-md-8">
              <input {...register("requirement", { required: "Requirement / Month is  required" })} className="form-control" id="fullName" />
              {errors.requirement && <p className="error">{errors.requirement.message}</p>}
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-4 font-weight-bold">Remarks :</div>
            <div className="col-md-8">
              <textarea {...register("remarks", { required: "Write Your Query" })} className="form-control" id="address" rows={10} ></textarea>
              {errors.remarks && <p className="error">{errors.remarks.message}</p>}
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
            <div className="col-md-4"></div>
            <div className="col-md-8">
              {/* <button disabled={isSome(isProcessing)} className="btn btn-primary text-right">Send Message</button> */}
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
export default CustomerEnquiryProductForm;