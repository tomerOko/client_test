import React from 'react';
import useScript from 'utils/hooks/useScript';

export function LoginWithGoogle() {
  useScript('https://accounts.google.com/gsi/client');
  return (
    <>
      <div
        id="g_id_onload"
        data-client_id="292283129342-6hii1vpcc3c7mpapaehgu0bfavlb8o1v.apps.googleusercontent.com"
        data-context="signup"
        data-ux_mode="popup"
        data-login_uri="/api/auth/one-tap/callback"
        data-auto_prompt="false"
      ></div>

      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="continue_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>
    </>
  );
}
