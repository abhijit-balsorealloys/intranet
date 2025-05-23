import { Option, isNone, isSome, none, some } from "fp-ts/lib/Option";
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { unWrapOption } from "utils/option.utils";
import SecureReactCaptcha from 'secure-react-captcha';
import { FormButton, FormInput, FormSelect, FormTextarea } from "uiComponents/Form";

interface IContactForm {
  fullName: string;
  emailID: string;
  phNum: string;
  howKnow: string;
  queryMsg: string;
}

const ContactUsForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>({
    defaultValues: {
      fullName: '',
      emailID: '',
      phNum: '',
      howKnow: '',
      queryMsg: '',
    },
  });

  const [isProcessing, setIsProcessing] = useState<Option<boolean>>(none)
  const [isCaptchaClicked, setIsCaptchaClicked] = useState<Option<boolean>>(none)
  const [captchaValidated, setCaptchaValidated] = useState<Option<boolean>>(none)

  const handleValidation = (isValid: boolean) => {
    setCaptchaValidated(some(isValid));
  };

  const formSubmit = (data: IContactForm) => {
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
          <h3>Contact Form</h3>
          <span className="text-center"><div className="blue-line mt-2 mb-4"></div></span>
          <div className="row mb-2">
            <div className="col-md-4 font-weight-bold">
              <label htmlFor="fullName">Full Name :</label>
            </div>
            <div className="col-md-8">
              <FormInput register={{ ...register("fullName", { required: "Full name is required!" }) }} error={errors.fullName?.message} required />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-4 font-weight-bold">
              <label htmlFor="emailID">Email ID :</label>
            </div>
            <div className="col-md-8">
              <FormInput register={{ ...register("emailID", { required: "Email ID is required!" }) }} error={errors.emailID?.message} required />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-4 font-weight-bold">
              <label htmlFor="phNum">Contact Number :</label>
            </div>
            <div className="col-md-8">
              <FormInput register={{ ...register("phNum", { required: "Phone no. is required!" }) }} error={errors.phNum?.message} required />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-4 font-weight-bold">
              <label htmlFor="howKnow">How did you get to know about us  :</label>
            </div>
            <div className="col-md-8">
              <FormSelect register={{ ...register("howKnow", { required: "This field is required!" }) }} error={errors.howKnow?.message} required>
                <option value="">-- SELECT OPTION --</option>
                <option value="Friend">Friend</option>
                <option value="Google">Google</option>
                <option value="Other Search Engine">Other Search Engine</option>
                <option value="Website Link">Website Link</option>
                <option value="Newspaper / Magazine">Newspaper / Magazine</option>
              </FormSelect>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-4 font-weight-bold">
              <label htmlFor="queryMsg">Your Query :</label>
            </div>
            <div className="col-md-8">
              <FormTextarea register={{ ...register("queryMsg", { required: "Query is required!" }) }} error={errors.queryMsg?.message} required />
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
export default ContactUsForm;