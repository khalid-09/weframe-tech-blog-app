const Testimonial = () => {
  return (
    <section className="bg-white px-8 py-[6.5rem] text-black smCustom:px-4">
      <div className="mx-auto max-w-[66.25rem] space-y-11">
        <blockquote className="text-left">
          <p className="text-2xl leading-8 tracking-[-0.46px] smCustom:text-xl">
            Delightfully effective experience... delivered a principal software
            engineer to offer within a month. It&apos;s remarkably helpful to
            access a sophisticated curation of candidates across tough-to-fill
            roles from the first week!
          </p>
          <footer className="mt-11 text-center">
            <cite className="text-xl not-italic tracking-[-0.4px] smCustom:text-lg">
              Sr. recruiter @Google Inc.
            </cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonial;
