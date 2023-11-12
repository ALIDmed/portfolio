import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionView } from "@/utils/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/utils/actions";
import toast from "react-hot-toast";
import SubmitBtn from "./SubmitBtn";

const Contact = () => {
  const { ref } = useSectionView("Contact", 1);

  return (
    <motion.section
      id="contact"
      className="z-[30] mb-20 sm:mb-28 w-full px-4 w-[min(100%, 38rem)]"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl text-white font-bold text-center mb-4">
        Contact
      </h2>
      <p className=" text-center text-gray-400">
        Please contact me directly at{" "}
        <a href="mailto:mohammed.amzyl00@gmail.com" className="underline">
          mohammed.amzyl00@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col min-w-[387px] max-w-[500px] mx-auto"
        action={async (FormData) => {
          const { data, error } = await sendEmail(FormData);

          if (error) {
            toast.error(error);
            console.log(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg transition-all bg-white bg-opacity-10 backdrop-blur-[4px] border border-white/20 text-white"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg border-purple/10 p-4 transition-all bg-white bg-opacity-10 backdrop-blur-[4px] border border-white/20 text-white"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
        {/* <button
          type="submit"
          className="items-center flex justify-center h-[3rem] w-[8rem] text-white rounded-xl outline-none transition-all group focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 bg-white bg-opacity-10 backdrop-blur-[1px] border border-white/20 gap-2"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button> */}
      </form>
    </motion.section>
  );
};

export default Contact;
