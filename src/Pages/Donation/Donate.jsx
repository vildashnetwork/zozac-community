import React, { useCallback, useEffect, useState } from 'react';
import './Donate.css';
import { createPortal } from 'react-dom';
import { MdClose, MdContentCopy, MdCheck, MdAccountBalance, MdSmartphone } from 'react-icons/md';

const BANK_FIELDS = [
  { label: "Account Number", value: "CM2110002000639000165086873" },
  { label: "Swift Code", value: "BCMACMCXXXX" },
];

const MOMO_FIELDS = [
  { label: "MTN Mobile Money Number", value: "+237 674274276" },
  { label: "MoMo Name", value: "AFUH ALFRED NGUM" },
];

const CopyField = ({ label, value }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch (err) {
      const ta = document.createElement("textarea");
      ta.value = value;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="donate-field">
      <div>
        <span className="donate-field-label">{label}</span>
        <span className="donate-code">{value}</span>
      </div>
      <button
        type="button"
        className={`donate-copy${copied ? " copied" : ""}`}
        onClick={copy}
        aria-label={`Copy ${label}`}
      >
        {copied ? <MdCheck size={15} /> : <MdContentCopy size={15} />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
};

const Donate = ({ onClose }) => {
  const close = useCallback(() => {
    if (typeof onClose === "function") onClose();
  }, [onClose]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [close]);

  return createPortal(
    <div className="donate-overlay" onClick={close} role="presentation">
      <div
        className="donate-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="donate-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="donate-close" onClick={close} aria-label="Close donation dialog">
          <MdClose size={20} />
        </button>

        <p className="donate-kicker">Give with love</p>
        <h2 className="donate-title" id="donate-title">Support Our Mission</h2>
        <p className="donate-subtitle">
          Your donation helps us continue building and expanding our vision -
          tap any detail to copy it instantly.
        </p>

        <div className="donate-methods">
          <div className="donate-card">
            <div className="donate-card-head">
              <span className="donate-card-icon"><MdAccountBalance /></span>
              <h3>Bank Transfer<small>Direct to our account</small></h3>
            </div>
            {BANK_FIELDS.map((f) => (
              <CopyField key={f.label} label={f.label} value={f.value} />
            ))}
          </div>

          <div className="donate-card">
            <div className="donate-card-head">
              <span className="donate-card-icon"><MdSmartphone /></span>
              <h3>MTN Mobile Money<small>Fastest way to give</small></h3>
            </div>
            {MOMO_FIELDS.map((f) => (
              <CopyField key={f.label} label={f.label} value={f.value} />
            ))}
          </div>
        </div>

        <p className="donate-foot">
          Every gift counts. <strong>Thank you</strong> for standing with ZOZAC Community.
        </p>
      </div>
    </div>,
    document.body
  );
};

export default Donate;
