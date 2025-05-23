import { Option, isNone, isSome, none, some } from "fp-ts/lib/Option";
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { unWrapOption } from "utils/option.utils";
import SecureReactCaptcha from 'secure-react-captcha';
import { FormButton, FormInput, FormSelect, FormTextarea } from "uiComponents/Form";

const CustomerFeedbackForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  /* const [show, setShow] = useState(false);
  const formData = watch();
  const formSubmit = (data: any) => {
    console.log(data);
    setShow(true);
  }; */


  const [isProcessing, setIsProcessing] = useState<Option<boolean>>(none)
  const [isCaptchaClicked, setIsCaptchaClicked] = useState<Option<boolean>>(none)
  const [captchaValidated, setCaptchaValidated] = useState<Option<boolean>>(none)

  const handleValidation = (isValid: boolean) => {
    setCaptchaValidated(some(isValid));
  };

  const formSubmit = (data: any) => {
    setIsProcessing(some(true))
    console.log(data)
    if (unWrapOption(captchaValidated, () => false)) {
      alert('Development is in progress! it will work in LIVE')
    }
    setIsProcessing(none)
  };

  watch();
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <h3>Customer Feedback Form</h3>
      <span className="text-center"><div className="blue-line mt-2 mb-4"></div></span>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead></thead>
          <tbody>
            <tr>
              <td><p><strong>Name of the respondent :</strong></p></td>
              <td>
                <input
                  {...register("respondantName", { required: true })}
                  placeholder="" className="form-control"
                />
                {errors.respondantName && <p className="error">Name of the respondent  is required.</p>}
              </td>
            </tr>
            <tr>
              <td><p><strong>Company name :</strong></p></td>
              <td><input
                {...register("companyName", { required: true, minLength: 2 })}
                placeholder="" className="form-control"
              />
                {errors.companyName && <p className="error">Company Name is required.</p>}
              </td>
            </tr>
            <tr>
              <td><p><strong>Address  :</strong></p></td>
              <td> <input
                {...register("address", { required: true })}
                placeholder="" className="form-control" />
                {errors.address && <p className="error">Address is required.</p>}
              </td>
            </tr>
            <tr>
              <td><p><strong>Email id :	</strong></p></td>
              <td> <input
                type="email"
                {...register("email", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.email && <p className="error">Email address is required.</p>}
              </td>
            </tr>
            <tr>
              <td><p><strong>Phone Number :	</strong></p></td>
              <td><input
                type="number"
                {...register("phone", { required: true, valueAsNumber: true })}
                placeholder="" className="form-control"
              />
                {errors.phone && <p className="error">Phone Number is required.</p>}
              </td>
            </tr>
            <tr>
              <td><p><strong>Date :	</strong></p></td>
              <td>
                <input type="date"
                  {...register("feedBackDate", { required: true })}
                  placeholder="" className="form-control"
                />
                {errors.feedBackDate && <p className="error">Date is required.</p>}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-primary"><strong>Please specify your other regular suppliers (manufacturers/country) of Ferro Chrome if  any:-</strong></p>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead></thead>
          <tbody>
            <tr>
              <td><textarea name="specify" className="form-control" cols={45} rows={6}></textarea></td>
            </tr>

          </tbody>
        </table>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead></thead>
          <tbody>
            <tr>
              <td colSpan={2}><p><strong>Please attribute the weightage percentage you will give to a ferro alloy manufacturer on the bellow four factors for performance evaluation. Sum total of there four factors should be 100%.</strong></p></td>
            </tr>
            <tr>
              <td><p><strong>A) Product Quality</strong></p></td>
              <td><input type="number"
                {...register("productQuality", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.productQuality && <p className="error">Product Quality Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p><strong>B) Image/ Reputation of Company</strong></p></td>
              <td><input type="number"
                {...register("reputationCompany", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.reputationCompany && <p className="error">Reputation Of Company Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p><strong>C) Order Execution</strong></p></td>
              <td><input type="number"
                {...register("orderExecution", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.orderExecution && <p className="error">Order Execution Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p><strong>D) Service Attitude</strong></p></td>
              <td width={800}><input type="number"
                {...register("serviceAttitude", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.serviceAttitude && <p className="error">Service Attitude Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p><strong>TOTAL in %</strong></p></td>
              <td width={800}><input type="text"
                {...register("total", { required: true })}
                placeholder="" className="form-control" value={100} readOnly
              />
                {errors.total && <p className="error"></p>}</td>
            </tr>

          </tbody>
        </table>
      </div>

      <p className="text-primary"><strong>Please put score on a scale of 5 – 1, on the following factors :</strong></p>
      <p><strong>Excellent - 5, Good - 4, Satisfactory - 3, Somewhat Bad - 2, Extremely Bad - 1</strong></p>
      <p className="text-primary"><strong>Please give appropriate scores to all the producers mentioned bellow: (Same score can be given to more than one producers)</strong></p>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th><p><strong>A) PRODUCT QUALITY</strong></p></th>
              <th><p><strong>BALASORE ALLOYS LIMITED</strong></p></th>
              <th><p><strong>OTHER INDIAN PRODUCERS</strong></p></th>
              <th><p><strong>CHINESE PRODUCERS</strong></p></th>
              <th><p><strong>SOUTH AFRICAN PRODUCERS</strong></p></th>
              <th><p><strong>ANY OTHER ORIGIN</strong></p></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><p>1. Overall product quality</p></td>
              <td><input type="number"
                {...register("balAlloysProduct", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysProduct && <p className="error">Balasore Alloys Product Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianProduct", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianProduct && <p className="error">Other  Indian Producers Product Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseProduct", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseProduct && <p className="error">Chinese Product Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaProduct", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaProduct && <p className="error">South Africa Product Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginProduct", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginProduct && <p className="error">Any Other Origin Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p>2. Specified Size</p></td>
              <td><input type="number"
                {...register("balAlloysSpecifiedSize", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysSpecifiedSize && <p className="error">Balasore Alloys Specified Size Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianSpecifiedSize", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianSpecifiedSize && <p className="error">Other  Indian Specified Size Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseSpecifiedSize", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseSpecifiedSize && <p className="error">Chinese Specified Size Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaSpecifiedSize", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaSpecifiedSize && <p className="error">South Africa Specified Size Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginSpecifiedSize", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginSpecifiedSize && <p className="error">Any Other Origin Specified Size Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p>3. Consistency in product quality</p></td>
              <td><input type="number"
                {...register("balAlloysConsistency", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysConsistency && <p className="error">Balasore Alloys Consistency Product Size Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianConsistency", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianConsistency && <p className="error">Other  Indian Consistency Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseConsistency", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseConsistency && <p className="error">Chinese Consistency Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaConsistency", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaConsistency && <p className="error">South Africa Specified Size Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginConsistency", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginConsistency && <p className="error">Any Other Origin Specified Size Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p>4. Packaging of products</p></td>
              <td><input type="number"
                {...register("balAlloysPackaging", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysPackaging && <p className="error">Balasore Alloys Packaging Product  Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianPackaging", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianPackaging && <p className="error">Other  Indian Packaging Product Score is required.</p>}</td>
              <td><input type="number"
                {...register("chinesePackaging", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chinesePackaging && <p className="error">Chinese Packaging Product Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaPackaging", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaPackaging && <p className="error">South Africa Packaging Product score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginPackaging", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginPackaging && <p className="error">Any Other Origin Packaging Product Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p>5. Availability of the product</p></td>
              <td><input type="number"
                {...register("balAlloysAvailability", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysAvailability && <p className="error">Balasore Alloys Availability Product  Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianAvailability", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianAvailability && <p className="error">Other  Indian Availability Product Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseAvailability", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseAvailability && <p className="error">Chinese Avialability Product Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaAvailability", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaAvailability && <p className="error">South Africa Availability Product score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginAvailability", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginAvailability && <p className="error">Any Other Origin Availability Product Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p><strong>Comment to Improve</strong></p></td>
              <td colSpan={5}><textarea name="commentProductQuality" className="form-control" cols={45} rows={6}></textarea></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th><p><strong>B) IMAGE/ REPUTATION OF COMPANY</strong></p></th>
              <th><p><strong>BALASORE ALLOYS LIMITED</strong></p></th>
              <th><p><strong>OTHER INDIAN PRODUCERS</strong></p></th>
              <th><p><strong>CHINESE PRODUCERS</strong></p></th>
              <th><p><strong>SOUTH AFRICAN PRODUCERS</strong></p></th>
              <th><p><strong>ANY OTHER ORIGIN</strong></p></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><p>1. Overall company  reputation</p></td>
              <td><input type="number"
                {...register("balAlloysReputation", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysReputation && <p className="error">Balasore Alloys Reputation Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianReputation", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianReputation && <p className="error">Other  Indian Company Reputaion Product Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseReputation", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseReputation && <p className="error">Chinese Company Reputation Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaReputation", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaReputation && <p className="error">South Africa Reputation Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginReputation", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginReputation && <p className="error">Any Other Origin Reputation Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p>2. Honours business commitments</p></td>
              <td><input type="number"
                {...register("balAlloysHonours", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysHonours && <p className="error">Balasore Alloys Honours Business Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianHonours", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianHonours && <p className="error">Other  Indian Company Honours Business Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseHonours", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseHonours && <p className="error">Chinese Company Honours Business Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaHonours", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaHonours && <p className="error">South Africa Honours Business Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginHonours", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginHonours && <p className="error">Any Other Origin Honours Business Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p>3. Professionalism in business dealings</p></td>
              <td><input type="number"
                {...register("balAlloysProfessionalism", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysProfessionalism && <p className="error">Balasore Alloys Professionalism in Business Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianProfessionalism", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianProfessionalism && <p className="error">Other  Indian Company Professionalism in Business Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseProfessionalism", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseProfessionalism && <p className="error">Chinese Company Professionalism in Business Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaProfessionalism", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaProfessionalism && <p className="error">South Africa Professionalism in  Business Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginProfessionalism", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginProfessionalism && <p className="error">Any Other Origin Professionalism in  Business Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p><strong>Comment to Improve</strong></p></td>
              <td colSpan={5}><textarea name="commentReputationCompany" className="form-control" cols={45} rows={6}></textarea></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th><p><strong>C) ORDER EXECUTION</strong></p></th>
              <th><p><strong>BALASORE ALLOYS LIMITED</strong></p></th>
              <th><p><strong>OTHER INDIAN PRODUCERS</strong></p></th>
              <th><p><strong>CHINESE PRODUCERS</strong></p></th>
              <th><p><strong>SOUTH AFRICAN PRODUCERS</strong></p></th>
              <th><p><strong>ANY OTHER ORIGIN</strong></p></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><p>1. Invoicing in terms of accuracy</p></td>
              <td><input type="number"
                {...register("balAlloysInvoice", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysInvoice && <p className="error">Balasore Alloys Invoicing in terms of accuracy Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianInvoice", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianInvoice && <p className="error">Other  Indian Company Invoicing in terms of accuracy Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseInvoice", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseInvoice && <p className="error">Chinese Company Invoicing in terms of accuracy Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaInvoice", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaInvoice && <p className="error">South Africa Invoicing in terms of accuracy Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginInvoice", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginInvoice && <p className="error">Any Other Origin Invoicing in terms of accuracy Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p>2. Delivery process( on time dispatch)</p></td>
              <td><input type="number"
                {...register("balAlloysDelivery", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysDelivery && <p className="error">Balasore Alloys Delivery Process Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianDelivery", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianDelivery && <p className="error">Other  Indian Company Delivery Process Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseDelivery", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseDelivery && <p className="error">Chinese Company Delivery Process Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaDelivery", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaDelivery && <p className="error">South Africa Delivery Process Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginDelivery", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginDelivery && <p className="error">Any Other Origin Delivery Process Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p>3. Commercial terms</p></td>
              <td><input type="number"
                {...register("balAlloysCommercial", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysCommercial && <p className="error">Balasore Alloys Commercial term Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianCommercial", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianCommercial && <p className="error">Other  Indian Company Commercial term Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseCommercial", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseCommercial && <p className="error">Chinese Company Commercial term Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaCommercial", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaCommercial && <p className="error">South Africa Commercial term Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginCommercial", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginCommercial && <p className="error">Any Other Origin Commercial term Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p>4. Compliance of pre shipment documents (Shipping schedule)</p></td>
              <td><input type="number"
                {...register("balAlloysShipping", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysShipping && <p className="error">Balasore Alloys Shipping Schedule score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianShipping", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianShipping && <p className="error">Other  Indian Company Shipping Schedule Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseShipping", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseShipping && <p className="error">Chinese Company Shipping Schedule Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaShipping", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaShipping && <p className="error">South Africa Shipping Schedule Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginShipping", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginShipping && <p className="error">Any Other Origin Shipping Schedule Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p>5. Compliance of post shipment documents</p></td>
              <td><input type="number"
                {...register("balAlloysCompliance", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysCompliance && <p className="error">Balasore Alloys Shipment Document score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianCompliance", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianCompliance && <p className="error">Other  Indian Company Shipment Document Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseCompliance", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseCompliance && <p className="error">Chinese Company Shipment Document Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaCompliance", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaCompliance && <p className="error">South Africa Shipment Document Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginCompliance", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginCompliance && <p className="error">Any Other Origin Shipment Document Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p><strong>Comment to Improve</strong></p></td>
              <td colSpan={5}><textarea name="commentOrderExecution" className="form-control" cols={45} rows={6}></textarea></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th><p><strong>D) SERVICE ATTITUDE</strong></p></th>
              <th><p><strong>BALASORE ALLOYS LIMITED</strong></p></th>
              <th><p><strong>OTHER INDIAN PRODUCERS</strong></p></th>
              <th><p><strong>CHINESE PRODUCERS</strong></p></th>
              <th><p><strong>SOUTH AFRICAN PRODUCERS</strong></p></th>
              <th><p><strong>ANY OTHER ORIGIN</strong></p></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><p>1. Frequency of visits by the accounts Manager/Sales representatives</p></td>
              <td><input type="number"
                {...register("balAlloysSales", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysSales && <p className="error">Balasore Alloys Frequency of visits Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianSales", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianSales && <p className="error">Other  Indian Company Frequency of visits Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseSales", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseSales && <p className="error">Chinese Company Frequency of visits Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaSales", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaSales && <p className="error">South Africa Frequency of visits Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginSales", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginSales && <p className="error">Any Other Origin Frequency of visits Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p>2. Accounts Manager/ Sales representatives attempt to build up a relationship.</p></td>
              <td><input type="number"
                {...register("balAlloysRelationship", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysRelationship && <p className="error">Balasore Alloys Build up a relationship Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianRelationship", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianRelationship && <p className="error">Other  Indian Company Build up a relationship Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseRelationship", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseRelationship && <p className="error">Chinese Company Build up a relationship Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaRelationship", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaRelationship && <p className="error">South Africa Build up a relationship Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginRelationship", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginRelationship && <p className="error">Any Other Origin Build up a relationship Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p>3. Adherence & Responsiveness to customers need & requirements</p></td>
              <td><input type="number"
                {...register("balAlloysAdherence", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysAdherence && <p className="error">Balasore Alloys Adherence & Responsiveness Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianAdherence", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianAdherence && <p className="error">Other  Indian Company Adherence & Responsiveness Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseAdherence", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseAdherence && <p className="error">Chinese Company Adherence & Responsiveness Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaAdherence", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaAdherence && <p className="error">South Africa Adherence & Responsiveness Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginAdherence", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginAdherence && <p className="error">Any Other Origin Adherence & Responsiveness Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p>4. Response & Ability to handle complaints</p></td>
              <td><input type="number"
                {...register("balAlloysResponse", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysResponse && <p className="error">Balasore Alloys Ability to handle complaints Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianResponse", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianResponse && <p className="error">Other  Indian Company Ability to handle complaints Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseResponse", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseResponse && <p className="error">Chinese Company Ability to handle complaints Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaResponse", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaResponse && <p className="error">South Africa Ability to handle complaints Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginResponse", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginResponse && <p className="error">Any Other Origin Ability to handle complaints Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p>5. Accounts Managers/Sales representatives knowledge level of market and  product.</p></td>
              <td><input type="number"
                {...register("balAlloysAccounts", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysAccounts && <p className="error">Balasore Alloys Knowledge level of market Score is required.</p>} </td>
              <td><input type="number"
                {...register("otherIndianAccounts", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianAccounts && <p className="error">Other  Indian Company Knowledge level of market Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseAccounts", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseAccounts && <p className="error">Chinese Company Company Knowlegde level of market Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaAccounts", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaAccounts && <p className="error">South Africa knowledge level of market Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginAccounts", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginAccounts && <p className="error">Any Other Origin knowledge level of market Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p>6. Accessibility of company executives</p></td>
              <td><input type="number"
                {...register("balAlloysAccessibility", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysAccessibility && <p className="error">Balasore Alloys Accessibility of company executives Score is required.</p>} </td>
              <td><input type="number"
                {...register("otherIndianAccessibility", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianAccessibility && <p className="error">Other  Indian Company Accessibility of company executives Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseAccessibility", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseAccessibility && <p className="error">Chinese Company Accessibility of company executives Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaAccessibility", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaAccessibility && <p className="error">South Africa Accessibility of company executives Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginAccessibility", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginAccessibility && <p className="error">Any Other Origin Accessibility of company executives Score is required.</p>}</td>
            </tr>

            <tr>
              <td><p>7. Response to enquiries</p></td>
              <td><input type="number"
                {...register("balAlloysEnquiries", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysEnquiries && <p className="error">Balasore Alloys Response to enquiries Score is required.</p>} </td>
              <td><input type="number"
                {...register("otherIndianEnquiries", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianEnquiries && <p className="error">Other  Indian Company Response to enquiries  Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseEnquiries", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseEnquiries && <p className="error">Chinese Company Response to enquiries Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaEnquiries", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaEnquiries && <p className="error">South Africa Response to enquiries Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginEnquiries", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginEnquiries && <p className="error">Any Other Origin Response to enquiries Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p>8. Company Brochure & sales material, Presentation</p></td>
              <td><input type="number"
                {...register("balAlloysCompany", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysCompany && <p className="error">Balasore Alloys Presentation Score is required.</p>} </td>
              <td><input type="number"
                {...register("otherIndianCompany", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianCompany && <p className="error">Other  Indian Company Presentation  Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseCompany", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseCompany && <p className="error">Chinese Company Presentation Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaCompany", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaCompany && <p className="error">South Africa Presentation Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginCompany", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginCompany && <p className="error">Any Other Origin Presentation Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p><strong>Comment to Improve</strong></p></td>
              <td colSpan={5}><textarea name="commentServiceAttitude" className="form-control" cols={45} rows={6}></textarea></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th><p><strong>E) PRICE</strong></p></th>
              <th><p><strong>BALASORE ALLOYS LIMITED</strong></p></th>
              <th><p><strong>OTHER INDIAN PRODUCERS</strong></p></th>
              <th><p><strong>CHINESE PRODUCERS</strong></p></th>
              <th><p><strong>SOUTH AFRICAN PRODUCERS</strong></p></th>
              <th><p><strong>ANY OTHER ORIGIN</strong></p></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><p>1. Competitive price</p></td>
              <td><input type="number"
                {...register("balAlloysPrice", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysPrice && <p className="error">Balasore Alloys Competative Price Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianPrice", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianPrice && <p className="error">Other  Indian Company Competative Price Score is required.</p>}</td>
              <td><input type="number"
                {...register("chinesePrice", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chinesePrice && <p className="error">Chinese Company Competative Price Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaPrice", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaPrice && <p className="error">South Africa Competative Price Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginPrice", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginPrice && <p className="error">Any Other Origin Competative Price Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p>2. Flexibility in meeting price request</p></td>
              <td><input type="number"
                {...register("balAlloysMeeting", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysMeeting && <p className="error">Balasore Alloys Meeting Price request Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianMeeting", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianMeeting && <p className="error">Other  Indian Company Meeting Price request Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseMeeting", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseMeeting && <p className="error">Chinese Company Meeting Price request Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaMeeting", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaMeeting && <p className="error">South Africa Meeting Price request Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginMeeting", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginMeeting && <p className="error">Any Other Origin Meeting Price request Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p><strong>Comment to Improve</strong></p></td>
              <td colSpan={5}><textarea name="commentPrice" className="form-control" cols={45} rows={6}></textarea></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th><p><strong>F) RELATIONSHIP WITH THE COMPANY</strong></p></th>
              <th><p><strong>BALASORE ALLOYS LIMITED</strong></p></th>
              <th><p><strong>OTHER INDIAN PRODUCERS</strong></p></th>
              <th><p><strong>CHINESE PRODUCERS</strong></p></th>
              <th><p><strong>SOUTH AFRICAN PRODUCERS</strong></p></th>
              <th><p><strong>ANY OTHER ORIGIN</strong></p></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><p>1. Customer oriented policies</p></td>
              <td><input type="number"
                {...register("balAlloysCustomer", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysCustomer && <p className="error">Balasore Alloys Customer Policies  Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianCustomer", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianCustomer && <p className="error">Other  Indian Company Customer Policies Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseCustomer", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseCustomer && <p className="error">Chinese Company Customer Policies Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaCustomer", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaCustomer && <p className="error">South Africa Customer Policies Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginCustomer", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginCustomer && <p className="error">Any Other Origin Customer Policies Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p>2. Cordiality & courteousness of behaviour</p></td>
              <td><input type="number"
                {...register("balAlloysBehaviour", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysBehaviour && <p className="error">Balasore Alloys Behaviour Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianBehaviour", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianBehaviour && <p className="error">Other  Indian Company Behaviour Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseBehaviour", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseBehaviour && <p className="error">Chinese Company Behaviour Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaBehaviour", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaBehaviour && <p className="error">South Africa Behaviour Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginBehaviour", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginBehaviour && <p className="error">Any Other Origin Behaviour Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p>3. Honesty & ethics in commercial dealings</p></td>
              <td><input type="number"
                {...register("balAlloysEthics", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysEthics && <p className="error">Balasore Alloys Honesty & ethics in commercial dealings Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianEthics", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianEthics && <p className="error">Other  Indian Company Honesty & ethics in commercial dealings Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseEthics", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseEthics && <p className="error">Chinese Company Honesty & ethics in commercial dealings Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaEthics", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaEthics && <p className="error">South Africa Honesty & ethics in commercial dealings  Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginEthics", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginEthics && <p className="error">Any Other Origin Honesty & ethics in commercial dealings Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p>4. Appreciative gestures towards loyal customers</p></td>
              <td><input type="number"
                {...register("balAlloysAppreciative", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysAppreciative && <p className="error">Balasore Alloys Appreciative gestures towards loyal customers Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianAppreciative", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianAppreciative && <p className="error">Other  Indian Company Appreciative gestures towards loyal customers Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseAppreciative", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseAppreciative && <p className="error">Chinese Company Appreciative gestures towards loyal customers Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaAppreciative", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaAppreciative && <p className="error">South Africa Appreciative gestures towards loyal customers  Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginAppreciative", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginAppreciative && <p className="error">Any Other Origin Appreciative gestures towards loyal customers  Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p><strong>Comment to Improve</strong></p></td>
              <td colSpan={5}><textarea name="commentRelationshipCompany" className="form-control" cols={45} rows={6}></textarea></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th><p><strong>G) CUSTOMER LOYALTY</strong></p></th>
              <th><p><strong>BALASORE ALLOYS LIMITED</strong></p></th>
              <th><p><strong>OTHER INDIAN PRODUCERS</strong></p></th>
              <th><p><strong>CHINESE PRODUCERS</strong></p></th>
              <th><p><strong>SOUTH AFRICAN PRODUCERS</strong></p></th>
              <th><p><strong>ANY OTHER ORIGIN</strong></p></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><p>1. Organisation drive towards long term relationship</p></td>
              <td><input type="number"
                {...register("balAlloysOrganisation", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysOrganisation && <p className="error">Balasore Alloys long term relationship Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianOrganisation", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianOrganisation && <p className="error">Other  Indian Company long term relationship Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseOrganisation", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseOrganisation && <p className="error">Chinese Company long term relationship Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaOrganisation", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaOrganisation && <p className="error">South Africa long term relationship Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginOrganisation", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginOrganisation && <p className="error">Any Other Origin long term relationship  Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p>2. Appreciative gestures towards loyal customers</p></td>
              <td><input type="number"
                {...register("balAlloysGestures", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysGestures && <p className="error">Balasore Alloys Appreciative gestures towards loyal customers Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianGestures", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianGestures && <p className="error">Other  Indian Company Appreciative gestures towards loyal customers Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseGestures", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseGestures && <p className="error">Chinese Company Appreciative gestures towards loyal customers Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaGestures", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaGestures && <p className="error">South Africa Appreciative gestures towards loyal customers Score Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginGestures", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginGestures && <p className="error">Any Other Origin Appreciative gestures towards loyal customers  Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p><strong>Comment to Improve</strong></p></td>
              <td colSpan={5}><textarea name="commentCustomerLoyalty" className="form-control" cols={45} rows={6}></textarea></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th><p><strong>H) BUSINESS SYSTEM</strong></p></th>
              <th><p><strong>BALASORE ALLOYS LIMITED</strong></p></th>
              <th><p><strong>OTHER INDIAN PRODUCERS</strong></p></th>
              <th><p><strong>CHINESE PRODUCERS</strong></p></th>
              <th><p><strong>SOUTH AFRICAN PRODUCERS</strong></p></th>
              <th><p><strong>ANY OTHER ORIGIN</strong></p></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><p>1. Internal production process</p></td>
              <td><input type="number"
                {...register("balAlloysInternal", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysInternal && <p className="error">Balasore Alloys Internal production process Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianInternal", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianInternal && <p className="error">Other  Indian Company Internal production process Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseInternal", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseInternal && <p className="error">Chinese Company Internal production process Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaInternal", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaInternal && <p className="error">South Africa Internal production process Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginInternal", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginInternal && <p className="error">Any Other Origin Internal production process  Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p>2. Best practice being followed</p></td>
              <td><input type="number"
                {...register("balAlloysBest", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysBest && <p className="error">Balasore Alloys Best practice being followed Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianBest", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianBest && <p className="error">Other  Indian Company Best practice being followed Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseBest", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseBest && <p className="error">Chinese Company Best practice being followed Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaBest", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaBest && <p className="error">South Africa Best practice being followed Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginBest", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginBest && <p className="error">Any Other Origin Best practice being followed  Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p>3. Continual improvement in product and system</p></td>
              <td><input type="number"
                {...register("balAlloysImprovement", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysImprovement && <p className="error">Balasore Alloys Improvement in product and system Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianImprovement", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianImprovement && <p className="error">Other  Indian Company Improvement in product and system Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseImprovement", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseImprovement && <p className="error">Chinese Company Improvement in product and system Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaImprovement", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaImprovement && <p className="error">South Africa Improvement in product and system Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginImprovement", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginImprovement && <p className="error">Any Other Origin Improvement in product and system Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p>4. Transparency and flexibility</p></td>
              <td><input type="number"
                {...register("balAlloysTransparency", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysTransparency && <p className="error">Balasore Alloys Transparency and flexibility Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianTransparency", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianTransparency && <p className="error">Other  Indian Company Transparency and flexibility Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseTransparency", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseTransparency && <p className="error">Chinese Company Transparency and flexibility Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaTransparency", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaTransparency && <p className="error">South Africa Transparency and flexibility Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginTransparency", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginTransparency && <p className="error">Any Other Origin Transparency and flexibility Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p>5. Compliance to legal requirement</p></td>
              <td><input type="number"
                {...register("balAlloysLegal", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.balAlloysLegal && <p className="error">Balasore Alloys Compliance to legal requirement Score is required.</p>}</td>
              <td><input type="number"
                {...register("otherIndianLegal", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.otherIndianLegal && <p className="error">Other  Indian Company Compliance to legal requirement Score is required.</p>}</td>
              <td><input type="number"
                {...register("chineseLegal", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.chineseLegal && <p className="error">Chinese Company Compliance to legal requirement  Score is required.</p>}</td>
              <td><input type="number"
                {...register("southAfricaLegal", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.southAfricaLegal && <p className="error">South Africa Compliance to legal requirement  Score is required.</p>}</td>
              <td><input type="number"
                {...register("anyOtherOriginLegal", { required: true })}
                placeholder="" className="form-control"
              />
                {errors.anyOtherOriginLegal && <p className="error">Any Other Origin Compliance to legal requirement  Score is required.</p>}</td>
            </tr>
            <tr>
              <td><p><strong>Comment to Improve</strong></p></td>
              <td colSpan={5}><textarea  {...register("commentBusinessSystem")} className="form-control" cols={45} rows={6}></textarea>
                {errors.commentBusinessSystem && <p className="error">Try To Improve some advices ara required.</p>}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-primary"><strong>I) ANY SPECIFIC ATRIBUTE/EXPECTATION NOT CAPTURED IN THE ABOVE SURVEY, REQUEST YOU TO PLEASE HIGHLIGHT SAME WITH COMMENTS</strong></p>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead></thead>
          <tbody>
            <tr>
              <td width={800}><textarea {...register("expectation")} className="form-control" cols={45} rows={6}></textarea>
                {errors.expectation && <p className="error">Any Specific Expectation not Captured  is required.</p>}
              </td>
            </tr>

          </tbody>
        </table>
      </div>
      <p className="text-primary"><strong>J) ANY COMMENT TO IMPROVE ON OUR STRATEGIES, TO IMPROVE OUR LONG TERM LOYALTY WITH OUR ORGANIZATION</strong></p>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead></thead>
          <tbody>
            <tr>
              <td width={800}><textarea {...register("strategies")} className="form-control" cols={45} rows={6}></textarea>
                {errors.strategies && <p className="error">Strategies  is required.</p>}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="my-3">
        <div onClick={() => setIsCaptchaClicked(some(true))}>
          <SecureReactCaptcha setValidated={handleValidation} />
        </div>
        {isSome(isCaptchaClicked) && <> {unWrapOption(captchaValidated, () => false) === false && <div className="invalid-feedback text-center d-block">Invalid captcha</div>} </>}
      </div>
      <div className="d-flex justify-content-center" onClick={() => setIsCaptchaClicked(some(true))}>
        {/* <input className="btn btn-primary" type="submit" value="Save" /> */}
        <FormButton disabled={isSome(isProcessing)} text="Save" className="btn btn-primary" />
        <input className="btn btn-danger mx-2" type="reset" value="Reset" />
        {/* {show ? (
          <div className="formValues">
            <p className="values">{formData.respondantName}</p>
            <p className="values">{formData.companyName}</p>
            <p className="values">{formData.address}</p>
            <p className="values">{formData.email}</p>
            <p className="values">{formData.phone}</p>
            <p className="values">{formData.feedBackDate}</p>
            <p className="values">{formData.specify}</p>
            <p className="values">{formData.productQuality}</p>
            <p className="values">{formData.reputationCompany}</p>
            <p className="values">{formData.orderExecution}</p>
            <p className="values">{formData.serviceAttitude}</p>
            <p className="values">{formData.total}</p>
            <p className="values">{formData.balAlloysProduct}</p>
            <p className="values">{formData.otherIndianProduct}</p>
            <p className="values">{formData.chineseProduct}</p>
            <p className="values">{formData.southAfricaProduct}</p>
            <p className="values">{formData.anyOtherOriginProduct}</p>
            <p className="values">{formData.balAlloysSpecifiedSize}</p>
            <p className="values">{formData.otherIndianSpecifiedSize}</p>
            <p className="values">{formData.chineseSpecifiedSize}</p>
            <p className="values">{formData.southAfricaSpecifiedSize}</p>
            <p className="values">{formData.anyOtherOriginSpecifiedSize}</p>
            <p className="values">{formData.balAlloysConsistency}</p>
            <p className="values">{formData.otherIndianConsistency}</p>
            <p className="values">{formData.chineseConsistency}</p>
            <p className="values">{formData.southAfricaConsistency}</p>
            <p className="values">{formData.anyOtherOriginConsistency}</p>
            <p className="values">{formData.balAlloysPackaging}</p>
            <p className="values">{formData.otherIndianPackaging}</p>
            <p className="values">{formData.chinesePackaging}</p>
            <p className="values">{formData.southAfricaPackaging}</p>
            <p className="values">{formData.anyOtherOriginPackaging}</p>
            <p className="values">{formData.balAlloysAvailability}</p>
            <p className="values">{formData.otherIndianAvailability}</p>
            <p className="values">{formData.chineseAvailability}</p>
            <p className="values">{formData.southAfricaAvailability}</p>
            <p className="values">{formData.anyOtherOriginAvailability}</p>
            <p className="values">{formData.commentProductQuality}</p>
            <p className="values">{formData.balAlloysReputation}</p>
            <p className="values">{formData.otherIndianReputation}</p>
            <p className="values">{formData.chineseReputation}</p>
            <p className="values">{formData.southAfricaReputation}</p>
            <p className="values">{formData.anyOtherOriginReputation}</p>
            <p className="values">{formData.balAlloysHonours}</p>
            <p className="values">{formData.otherIndianHonours}</p>
            <p className="values">{formData.chineseHonours}</p>
            <p className="values">{formData.southAfricaHonours}</p>
            <p className="values">{formData.anyOtherOriginHonours}</p>
            <p className="values">{formData.balAlloysProfessionalism}</p>
            <p className="values">{formData.otherIndianProfessionalism}</p>
            <p className="values">{formData.chineseProfessionalism}</p>
            <p className="values">{formData.southAfricaProfessionalism}</p>
            <p className="values">{formData.anyOtherOriginProfessionalism}</p>
            <p className="values">{formData.commentReputationCompany}</p>
            <p className="values">{formData.balAlloysInvoice}</p>
            <p className="values">{formData.otherIndianInvoice}</p>
            <p className="values">{formData.chineseInvoice}</p>
            <p className="values">{formData.southAfricaInvoice}</p>
            <p className="values">{formData.anyOtherOriginInvoice}</p>
            <p className="values">{formData.balAlloysDelivery}</p>
            <p className="values">{formData.otherIndianDelivery}</p>
            <p className="values">{formData.chineseDelivery}</p>
            <p className="values">{formData.southAfricaDelivery}</p>
            <p className="values">{formData.anyOtherOriginDelivery}</p>
            <p className="values">{formData.balAlloysCommercial}</p>
            <p className="values">{formData.otherIndianCommercial}</p>
            <p className="values">{formData.chineseCommercial}</p>
            <p className="values">{formData.southAfricaCommercial}</p>
            <p className="values">{formData.anyOtherOriginCommercial}</p>
            <p className="values">{formData.balAlloysShipping}</p>
            <p className="values">{formData.otherIndianShipping}</p>
            <p className="values">{formData.chineseShipping}</p>
            <p className="values">{formData.southAfricaShipping}</p>
            <p className="values">{formData.anyOtherOriginShipping}</p>
            <p className="values">{formData.balAlloysCompliance}</p>
            <p className="values">{formData.otherIndianCompliance}</p>
            <p className="values">{formData.chineseCompliance}</p>
            <p className="values">{formData.southAfricaCompliance}</p>
            <p className="values">{formData.anyOtherOriginCompliance}</p>
            <p className="values">{formData.commentOrderExecution}</p>
            <p className="values">{formData.balAlloysSales}</p>
            <p className="values">{formData.otherIndianSales}</p>
            <p className="values">{formData.chineseSales}</p>
            <p className="values">{formData.southAfricaSales}</p>
            <p className="values">{formData.anyOtherOriginSales}</p>
            <p className="values">{formData.balAlloysRelationship}</p>
            <p className="values">{formData.otherIndianRelationship}</p>
            <p className="values">{formData.chineseRelationship}</p>
            <p className="values">{formData.southAfricaRelationship}</p>
            <p className="values">{formData.anyOtherOriginRelationship}</p>
            <p className="values">{formData.balAlloysAdherence}</p>
            <p className="values">{formData.otherIndianAdherence}</p>
            <p className="values">{formData.chineseAdherence}</p>
            <p className="values">{formData.southAfricaAdherence}</p>
            <p className="values">{formData.anyOtherOriginAdherence}</p>
            <p className="values">{formData.balAlloysResponse}</p>
            <p className="values">{formData.otherIndianResponse}</p>
            <p className="values">{formData.chineseResponse}</p>
            <p className="values">{formData.southAfricaResponse}</p>
            <p className="values">{formData.anyOtherOriginResponse}</p>
            <p className="values">{formData.balAlloysAccounts}</p>
            <p className="values">{formData.otherIndianAccounts}</p>
            <p className="values">{formData.chineseAccounts}</p>
            <p className="values">{formData.southAfricaAccounts}</p>
            <p className="values">{formData.anyOtherOriginAccounts}</p>
            <p className="values">{formData.balAlloysAccessibility}</p>
            <p className="values">{formData.otherIndianAccessibility}</p>
            <p className="values">{formData.chineseAccessibility}</p>
            <p className="values">{formData.southAfricaAccessibility}</p>
            <p className="values">{formData.anyOtherOriginAccessibility}</p>
            <p className="values">{formData.balAlloysEnquiries}</p>
            <p className="values">{formData.otherIndianEnquiries}</p>
            <p className="values">{formData.chineseEnquiries}</p>
            <p className="values">{formData.southAfricaEnquiries}</p>
            <p className="values">{formData.anyOtherOriginEnquiries}</p>
            <p className="values">{formData.balAlloysCompany}</p>
            <p className="values">{formData.otherIndianCompany}</p>
            <p className="values">{formData.chineseCompany}</p>
            <p className="values">{formData.southAfricaCompany}</p>
            <p className="values">{formData.anyOtherOriginCompany}</p>
            <p className="values">{formData.commentServiceAttitude}</p>
            <p className="values">{formData.balAlloysPrice}</p>
            <p className="values">{formData.otherIndianPrice}</p>
            <p className="values">{formData.chinesePrice}</p>
            <p className="values">{formData.southAfricaPrice}</p>
            <p className="values">{formData.anyOtherOriginPrice}</p>
            <p className="values">{formData.balAlloysMeeting}</p>
            <p className="values">{formData.otherIndianMeeting}</p>
            <p className="values">{formData.chineseMeeting}</p>
            <p className="values">{formData.southAfricaMeeting}</p>
            <p className="values">{formData.anyOtherOriginMeeting}</p>
            <p className="values">{formData.commentPrice}</p>
            <p className="values">{formData.balAlloysCustomer}</p>
            <p className="values">{formData.otherIndianCustomer}</p>
            <p className="values">{formData.chineseCustomer}</p>
            <p className="values">{formData.southAfricaCustomer}</p>
            <p className="values">{formData.anyOtherOriginCustomer}</p>
            <p className="values">{formData.balAlloysBehaviour}</p>
            <p className="values">{formData.otherIndianBehaviour}</p>
            <p className="values">{formData.chineseBehaviour}</p>
            <p className="values">{formData.southAfricaBehaviour}</p>
            <p className="values">{formData.anyOtherOriginBehaviour}</p>
            <p className="values">{formData.balAlloysEthics}</p>
            <p className="values">{formData.otherIndianEthics}</p>
            <p className="values">{formData.chineseEthics}</p>
            <p className="values">{formData.southAfricaEthics}</p>
            <p className="values">{formData.anyOtherOriginEthics}</p>
            <p className="values">{formData.balAlloysAppreciative}</p>
            <p className="values">{formData.otherIndianAppreciative}</p>
            <p className="values">{formData.chineseAppreciative}</p>
            <p className="values">{formData.southAfricaAppreciative}</p>
            <p className="values">{formData.anyOtherOriginAppreciative}</p>
            <p className="values">{formData.commentRelationshipCompany}</p>
            <p className="values">{formData.balAlloysOrganisation}</p>
            <p className="values">{formData.otherIndianOrganisation}</p>
            <p className="values">{formData.chineseOrganisation}</p>
            <p className="values">{formData.southAfricaOrganisation}</p>
            <p className="values">{formData.anyOtherOriginOrganisation}</p>
            <p className="values">{formData.balAlloysGestures}</p>
            <p className="values">{formData.otherIndianGestures}</p>
            <p className="values">{formData.chineseGestures}</p>
            <p className="values">{formData.southAfricaGestures}</p>
            <p className="values">{formData.anyOtherOriginGestures}</p>
            <p className="values">{formData.commentCustomerLoyalty}</p>
            <p className="values">{formData.balAlloysInternal}</p>
            <p className="values">{formData.otherIndianInternal}</p>
            <p className="values">{formData.chineseInternal}</p>
            <p className="values">{formData.southAfricaInternal}</p>
            <p className="values">{formData.anyOtherOriginInternal}</p>
            <p className="values">{formData.balAlloysBest}</p>
            <p className="values">{formData.otherIndianBest}</p>
            <p className="values">{formData.chineseBest}</p>
            <p className="values">{formData.southAfricaBest}</p>
            <p className="values">{formData.anyOtherOriginBest}</p>
            <p className="values">{formData.balAlloysImprovement}</p>
            <p className="values">{formData.otherIndianImprovement}</p>
            <p className="values">{formData.chineseImprovement}</p>
            <p className="values">{formData.southAfricaImprovement}</p>
            <p className="values">{formData.anyOtherOriginImprovement}</p>
            <p className="values">{formData.balAlloysTransparency}</p>
            <p className="values">{formData.otherIndianTransparency}</p>
            <p className="values">{formData.chineseTransparency}</p>
            <p className="values">{formData.southAfricaTransparency}</p>
            <p className="values">{formData.anyOtherOriginTransparency}</p>
            <p className="values">{formData.balAlloysLegal}</p>
            <p className="values">{formData.otherIndianLegal}</p>
            <p className="values">{formData.chineseLegal}</p>
            <p className="values">{formData.southAfricaLegal}</p>
            <p className="values">{formData.anyOtherOriginLegal}</p>
            <p className="values">{formData.commentBusinessSystem}</p>
            <p className="values">{formData.expectation}</p>
            <p className="values">{formData.strategies}</p>

          </div>
        ) : ""} */}

      </div>
    </form>

  );
};
export default CustomerFeedbackForm;