export default function Timeline() {
  return (
    <ol className="relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-200">
      <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
        <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
          <span className="size-3 shrink-0 rounded-full" style={{ backgroundColor: "#0082C6" }}></span>

          <div className="-mt-2">
            <time className="text-xs/none font-medium text-gray-700 font-ibm-regular">مرحله اول</time>

            <h3 className="text-lg font-bold text-gray-900 font-ibm-semibold">ثبت درخواست</h3>

            <p className="mt-0.5 text-sm text-gray-700 font-ibm-regular">
              فرم درخواست خود را از طریق وب‌سایت آبادیس با دقت پر کنید و به همراه مدارک برای ما ارسال میکنید.
            </p>
          </div>
        </div>

        <div aria-hidden="true"></div>
      </li>

      <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
        <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
          <span className="size-3 shrink-0 rounded-full" style={{ backgroundColor: "#0082C6" }}></span>

          <div className="-mt-2">
            <time className="text-xs/none font-medium text-gray-700 font-ibm-regular">مرحله دوم</time>

            <h3 className="text-lg font-bold text-gray-900 font-ibm-semibold">بررسی مدارک</h3>

            <p className="mt-0.5 text-sm text-gray-700 font-ibm-regular">
              مدارک تان را به همراه فرم درخواست ارسال شده توسط شما بررسی کرده و آن را ترجمه خواهیم کرد.
            </p>
          </div>
        </div>

        <div aria-hidden="true"></div>
      </li>

      <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
        <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
          <span className="size-3 shrink-0 rounded-full" style={{ backgroundColor: "#0082C6" }}></span>

          <div className="-mt-2">
            <time className="text-xs/none font-medium text-gray-700 font-ibm-regular">مرحله سوم</time>

            <h3 className="text-lg font-bold text-gray-900 font-ibm-semibold">انتخاب رشته</h3>

            <p className="mt-0.5 text-sm text-gray-700 font-ibm-regular">
              پس از مشاوره تخصصی در باره انتخاب رشته، رشته مورد نظر خود را انتخاب کرده و به ما اعلام میکنید.
            </p>
          </div>
        </div>

        <div aria-hidden="true"></div>
      </li>

      <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
        <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
          <span className="size-3 shrink-0 rounded-full" style={{ backgroundColor: "#0082C6" }}></span>

          <div className="-mt-2">
            <time className="text-xs/none font-medium text-gray-700 font-ibm-regular">مرحله چهارم</time>

            <h3 className="text-lg font-bold text-gray-900 font-ibm-semibold">اخذ پذیرش</h3>

            <p className="mt-0.5 text-sm text-gray-700 font-ibm-regular">
              تمام مراحل اداری و اقدامات لازم را انجام خواهیم داد تا نهایتاً نامه پذیرش دانشگاه برای شما صادر و ارسال
              شود.
            </p>
          </div>
        </div>

        <div aria-hidden="true"></div>
      </li>
    </ol>
  )
}
