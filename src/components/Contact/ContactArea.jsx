import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorMsg from "../common/ErrorMsg";
import schema from "../common/schema";

const ContactArea = () => {
  const handleOnSubmit = (values, { resetForm }) => {
    alert(
      `${
        values.name +
        "\n" +
        values.email +
        "\n" +
        values.subject +
        "\n" +
        values.msg
      }`
    );
    resetForm();
  };
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        subject: "",
        msg: "",
      },
      validationSchema: schema,
      onSubmit: handleOnSubmit,
    });

  return (
    <>
      <section className="contact__area bg-grad pt-115 pb-120">
        <div className="container">
          <div className="row">
            <div className="">
              <div className="contact__wrapper">
                <div className="section__title-wrapper text-center mb-40">
                  <h2 className="tp-title text-white">Get in touch</h2>
                </div>
                <div className="contact__form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <div className="contact__form-input">
                          <input
                            id="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            placeholder="Your Name"
                          />
                          {touched.name && <ErrorMsg error={errors.name} />}
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <div className="contact__form-input">
                          <input
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="email"
                            placeholder="Your Email"
                          />
                          {touched.email && <ErrorMsg error={errors.email} />}
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__form-input">
                          <input
                            id="subject"
                            value={values.subject}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            placeholder="Your Subject"
                          />
                          {touched.subject && (
                            <ErrorMsg error={errors.subject} />
                          )}
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__form-input">
                          <textarea
                            id="msg"
                            value={values.msg}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Write  Your Message"
                          ></textarea>
                          {touched.msg && <ErrorMsg error={errors.msg} />}
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__btn text-center">
                          <button type="submit" className="tp-solid-btn">
                            Send your message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
