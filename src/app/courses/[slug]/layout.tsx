import { ChildrenProps } from "types/ChildrenProps";
export default function CourseLayout({ children }: ChildrenProps) {
  return (
    <div className="bg-white">
      {children}

      {/* SEO Content Block */}
      <section className="max-w-5xl mx-auto px-6 py-10 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold mb-4">
          Why Choose Online Courses with UNIFOST?
        </h2>

        <p>
          <strong>UNIFOST</strong> helps students and working professionals
          choose the best <strong>UGC-approved online degree programs</strong>
          in India. We provide expert guidance for
          <strong> MBA, MCA, BBA, BCA, B.Com, M.Com</strong> and more.
        </p>

        <p className="mt-4">
          Compare top universities like{" "}
          <strong>Amity, Manipal, NMIMS, Jain, LPU</strong> with transparent
          fee structures, eligibility criteria, and career outcomes.
        </p>

        <p className="mt-4">
          With personalized counseling, scholarship guidance, and placement
          support, UNIFOST ensures your online education journey is smooth
          and successful.
        </p>
      </section>
    </div>
  );
}
