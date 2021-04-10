export default function Aliascard() {
  return (
    <div className="mails">
      <div className="mail_item">
        <div className="email">
          mxtoolbox.admeadure@aleeas.com
        </div>
        <div className="rig">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div>
        <div className="email_info">
          xyz@gmail.com  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cursor-fill" viewBox="0 0 16 16">
            <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
          </svg> <span>18</span> hour ago

        </div>
        <div>
          <button type="button" className="btn btn-outline-danger cardbtn"><span>Send Email</span></button>
        </div>
      </div>
    </div>
  );
}
