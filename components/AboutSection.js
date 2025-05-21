import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 px-4 md:px-6 bg-[#ebe5d9]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#5c4d3c] mb-12 text-center">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-[#d6c9b6]">
              <Image
                src="/vivi.JPG"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-lg text-[#5c4d3c] mb-6">
              With over 10 years of experience in Customer Relationship
              Management, I've helped businesses of all sizes transform their
              customer interactions into meaningful relationships that drive
              growth and loyalty.
            </p>
            <p className="text-lg text-[#5c4d3c] mb-6">
              My approach combines strategic planning, cutting-edge technology
              implementation, and a deep understanding of human psychology to
              create CRM systems that truly work for your business.
            </p>
            <p className="text-lg text-[#5c4d3c]">
              I believe that effective CRM is not just about software—it's about
              creating a customer-centric culture that permeates every aspect of
              your organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
