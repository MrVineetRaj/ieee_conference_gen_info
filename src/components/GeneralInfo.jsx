import React from "react";

const GeneralInfo = () => {
  return (
    <div className="px-4  md:px-16 lg:px-36 xl:px-44 font-istok-web py-20 flex flex-col gap-5">
      <h1 className="flex gap-4 font-[700] text-3xl sm:text-4xl md:text-6xl primary-text-color ">
        General <span className="hidden sm:block">Information</span>{" "}
        <span className="block sm:hidden">Info</span>
      </h1>
      <div className="flex flex-col-reverse gap-4 md:flex-row md:justify-between ">
        <div className="md:flex-[0.5] text-sm md:text-md xl:text-lg text-justify  md:text-left">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum vitae
          dictum in luctus mus facilisis. Aenean enim class cubilia ac porta
          suspendisse auctor senectus. Viverra commodo bibendum fringilla morbi
          eros nullam sit dui non. Hac inceptos quis, taciti netus urna at
          aliquet. Taciti natoque ad class proin ullamcorper curae facilisis
          suscipit. Nulla arcu faucibus elementum torquent sapien porta.
          Suspendisse adipiscing nascetur sed conubia parturient primis, at non.
          Mattis mollis a curabitur lacinia nibh fames. Erat fringilla non
          <br />
          malesuada nec aliquet dictumst eros scelerisque. Mattis senectus
          placerat nunc eleifend viverra. Nostra aptent justo felis vel sagittis
          pellentesque aliquet tempus integer. Commodo id rutrum ipsum dapibus
          dictumst ad maecenas nam facilisi. Platea turpis lectus parturient
          varius mauris. Porttitor interdum mattis penatibus ac posuere conubia
          mauris suspendisse. Nulla fusce pellentesque pellentesque vestibulum
          pharetra egestas tincidunt posuere. Facilisis suspendisse cubilia
          bibendum pellentesque, proin dui nibh. Maecenas sagittis neque
          maximus; posuere nulla mattis. Quis inceptos metus class mus libero
          <br />
          elementum. Euismod malesuada fermentum montes vehicula et tellus.
          Tellus fermentum quis mus taciti blandit pharetra morbi. Sed iaculis
          dictum vel sed mi vel dolor. Mattis morbi platea facilisis eleifend
          laoreet vivamus maximus netus nullam.
        </div>
        <div className=" md:flex-[0.4]">
          <img src="/images/general_info_image.jpg" className="hidden md:block" alt="general-info" />
          <img src="/images/general_info_image_small.jpg" className=" md:hidden" alt="general-info" />
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
