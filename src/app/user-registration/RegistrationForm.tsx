"use client";

import { useSearchParams } from "next/navigation";

export default function RegistrationForm() {
  const searchParams = useSearchParams();
  const isInterestForm = searchParams.get("form") === "interested";

  const formSrc = isInterestForm
    ? "https://docs.google.com/forms/d/e/1FAIpQLSfnD_JuOtPET85CuFnsptSnv1eQZpuef08VR0wAZHfIjGNFYg/viewform?embedded=true"
    : "https://docs.google.com/forms/d/e/1FAIpQLSewPLUL0NJJMrzLmcAVUwzNx7fMfL_7hbfqWI-8jix4Wkjumw/viewform?embedded=true";

  return (
    <iframe 
      src={formSrc}
      width="100%" 
      height="100%" 
      style={{ border: 0 }}
      title="User Registration Form"
      allowFullScreen
    >Loading…</iframe>
  );
}
