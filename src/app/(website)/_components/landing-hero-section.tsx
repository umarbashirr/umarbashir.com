import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingHeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[90vh] gap-10">
      <div className="flex flex-col items-center justify-center text-center max-w-5xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight">
          Umar Bashir Rather – Full Stack Software Developer
        </h1>
        <p className="leading-normal mt-6 lg:text-lg lg:leading-loose">
          Full Stack Software Developer specialized in building modern,
          scalable, and secure web applications. From intuitive front-end
          experiences to robust back-end systems, I turn ideas into powerful
          digital products.
        </p>
        <div className="w-full flex items-center justify-center gap-4 mt-6">
          <Button variant="secondary" asChild size="lg" className="py-5 px-10">
            <Link
              href="mailto:mail.umarbashir@gmail.com"
              target="_blank"
              download
            >
              Hire Me
            </Link>
          </Button>
          <Button asChild size="lg" className="py-3 px-10">
            <Link href="/my-work">My Work</Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center text-center">
        <p className="text-muted-foreground text-sm">
          Available for freelance & product collaborations. Based in India /
          Remote
        </p>
      </div>
    </div>
  );
};

export default LandingHeroSection;
