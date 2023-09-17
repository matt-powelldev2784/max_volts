export interface htmlEmailStringProps {
  name: string
  tel: string
  email: string
  message: string
}

export const htmlEmailString = ({
  name,
  tel,
  email,
  message,
}: htmlEmailStringProps) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Max Volts New Enquiry</title>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link href="main.css" rel="stylesheet" />
  </head>
  <body
    style="
      position: relative;
      margin: 0 auto;
      width: 100%;
      overflow-y: hidden;
      scroll-behavior: smooth;
      background: #ffffff;
      font-family: 'Lato', sans-serif;
    "
  >
    <header>
      <div style="background: #161616; position: relative">
        <img
          src="https://max-volts-email.netlify.app/max_volts_logo.png"
          alt="Max Volts Logo"
          style="
            width: auto;
            height: 3.5rem;
            display: block;
            margin-left: auto;
            margin-right: auto;
            padding: 0.25rem;
          "
        />
      </div>
    </header>
    <main style="margin-top: 3rem">
      <img
        src="https://max-volts-email.netlify.app/person.png"
        alt="Person Icon"
        style="
          width: auto;
          height: 3.5rem;
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-top: 3rem;
        "
      />
      <h1
        style="
          text-align: center;
          line-height: 2rem;
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 0.5rem;
        "
      >
        You have a new enquiry from : ${name}
      </h1>

      <h2
        style="
          text-align: center;
          line-height: 2rem;
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 0.5rem;
        "
      >
        with email : ${email}
        <br>  
        and phone number : ${tel}
      </h2>

      <p
        style="
          text-align: center;
          font-size: 1.2rem;
          margin: 0;
          margin-top: 3rem;
        "
      >
        The message is:
      </p>
      <p
        style="
          display: block;
          margin: 0 auto;
          padding: 0.5rem;
          text-align: center;
          width: 320px;
          font-size: 1.2rem;
          font-weight: 600;
        "
      >
        ${message || 'No message provided'}
      </p>
    </main>
  </body>
</html>`
}
