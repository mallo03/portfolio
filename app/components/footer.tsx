export default function Footer() {
  return (
    <div
      className="py-24 bg-pearl dark:bg-gray dark:text-white grid grid-rows-2 justify-center justify-items-center"
      id="contact"
    >
      <div className="flex justify-between w-80 row-span-1">
        <a href="mailto:michael.girikallo@gmail.com?subject=Your%20Subject&body=Your%20Message">
          <img src="/images/mail.svg" alt="" className="h-6 w-6 dark:hidden" />
          <img
            src="/images/mail-w.svg"
            alt=""
            className="h-6 w-6 hidden dark:block"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/michael-girikallo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/linkedin.svg"
            alt=""
            className="h-6 w-6 dark:hidden"
          />
          <img
            src="/images/linkedin-w.svg"
            alt=""
            className="h-6 w-6 hidden dark:block"
          />
        </a>
        <a
          href="https://github.com/mallo03"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/github.svg"
            alt=""
            className="h-6 w-6 dark:hidden"
          />
          <img
            src="/images/github-w.svg"
            alt=""
            className="h-6 w-6 hidden dark:block"
          />
        </a>
        <a
          href="https://www.instagram.com/michael_allo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/instagram.svg"
            alt=""
            className="h-6 w-6 dark:hidden"
          />
          <img
            src="/images/instagram-w.svg"
            alt=""
            className="h-6 w-6 hidden dark:block"
          />
        </a>
      </div>
      <div className="row-span-1 pt-8"> <p>© Michael J Girikallo 2024</p></div>
    </div>
  );
}
