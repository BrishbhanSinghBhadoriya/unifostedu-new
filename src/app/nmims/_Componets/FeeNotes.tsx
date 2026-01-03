"use client";

const FeeNotes = () => {
  return (
    <section className="w-full mt-1 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        
       

        {/* Notes List */}
        <div className="bg-gray-400 rounded-2xl shadow-sm p-8 space-y-4 text-black">
          <p>
            <strong>Note:</strong> To get a detailed understanding of the fee structure, contact a student counsellor.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Admission Processing Fee of ₹1,200/- applicable for all admissions.</li>
            <li>An initial amount of ₹10,000/- from the program fee will be collected at the time of registration.</li>
            <li>Exam fee : ₹800/- per subject, per attempt.</li>
            <li>Project fee : ₹800/- per attempt.</li>
            <li>
              Students also have the option to pay the full program fee of ₹ /- if they prefer.
            </li>
            <li>
              The above-mentioned fee structure is subject to change at the discretion of the University.
            </li>
            <li>
              Any payment made via Demand Draft should be made in favour of <strong>“SVKM’s NMIMS”</strong> payable at Mumbai.
            </li>
            <li>
              Now avail loan facility to pay fees for the Program even without a credit card.
            </li>
            <li>
              Finance Options Available with <strong>No Cost EMI*</strong>. Please contact a counsellor to know more.
            </li>
          </ul>
        </div>

        {/* Scholarship Policy */}
        <div className="mt-10 bg-white rounded-2xl shadow-sm p-8">
          <h3 className="text-2xl font-semibold mb-4">
            Scholarship Policy
          </h3>
          <p className="text-gray-700 leading-relaxed">
            The University offers special incentives to our armed forces, Defence Personnel and their immediate family
            with a <strong>20% Defence Scholarship</strong> on the program fee.
          </p>
        </div>

        {/* Cancellation Policy */}
        <div className="mt-10 bg-white rounded-2xl shadow-sm p-8">
          <h3 className="text-2xl font-semibold mb-2">
            Cancellation / Refund Policy
          </h3>
          <p className="text-gray-500">
            Please contact a student counsellor for detailed cancellation and refund guidelines.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FeeNotes;
