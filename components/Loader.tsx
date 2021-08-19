/**
 * This component is a simple loader to be shown when the application is busy
 * @param show if true, shows the spinning loader
 * @returns Loader component
 */
export default function Loader({ show }) {
  return show ? <div className="loader"></div> : null;
}