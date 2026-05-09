"use client";

import { useEffect } from "react";

export default function WaitlistForm() {
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
        src="https://api.movestraightforward.com/widget/form/vIpMD87Cd36FRmlsfFjJ"
        style={{ width: "100%", height: "434px", border: "none" }}
        id="inline-vIpMD87Cd36FRmlsfFjJ"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Messy Sexy Real Waitlist"
        data-height="434"
        data-layout-iframe-id="inline-vIpMD87Cd36FRmlsfFjJ"
        data-form-id="vIpMD87Cd36FRmlsfFjJ"
        title="Messy Sexy Real Waitlist"
      />
    </div>
  );
}