import React from "react";
import "./pages.css";
import AlignItemsList from "../Components/List";
import { useForm } from "react-hook-form";
const Content = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const phoneNumber = "+972592502182"; // ← رقمك بدون + أو صفر بالبداية، مع كود الدولة
    const message = encodeURIComponent(`تم إدخال البيانات: ${data.name}`);
    const message1 = encodeURIComponent(`تم إدخال البيانات: ${data.email}`);
    const message2 = encodeURIComponent(`تم إدخال البيانات: ${data.mess}`);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${
      (message, message1, message2)
    }`;
    window.open(whatsappURL, "_blank");
    reset();
  };

  console.log(watch("mess"));
  return (
    <>
      <h1 className="title-content">Content With Me</h1>
      <div id="contact" className="contenier-content">
        <div className="sec">
          <AlignItemsList />
        </div>
        <div className="sec">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h5 style={{ color: "#1976d2" }}>Content Me</h5>
            <input
              className="input"
              placeholder="Your Name "
              required
              {...register("name", { required: true })}
            />
            <input
              className="input"
              placeholder="Your Email "
              required
              {...register("exampleRequired", "email", { required: true })}
            />
            <input
              className="input"
              placeholder="Your Message "
              required
              {...register("exampleRequired", "mess", { required: true })}
            />
            {errors.exampleRequired && (
              <span style={{ display: "block" }}>This field is required</span>
            )}
            <button className="btn" type="submit">
              {" "}
              send request{" "}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Content;
