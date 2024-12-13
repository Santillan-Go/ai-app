import "./Loader.css";
function Loader() {
  return (
    <section className="Loader_Container text-white">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}

export default Loader;
