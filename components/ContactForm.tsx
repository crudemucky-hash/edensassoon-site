"use client";

import { useEffect } from "react";

export default function ContactForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api.movestraightforward.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full">
      <iframe
        src="https://api.movestraightforward.com/widget/form/JcGTCKqvXpbQqgH0SZw0"
        style={{ width: "100%", height: "434px", border: "none" }}
        id="inline-JcGTCKqvXpbQqgH0SZw0"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Contact Eden"
        data-height="434"
        data-layout-iframe-id="inline-JcGTCKqvXpbQqgH0SZw0"
        data-form-id="JcGTCKqvXpbQqgH0SZw0"
        title="Contact Eden"
      />
    </div>
  );
}