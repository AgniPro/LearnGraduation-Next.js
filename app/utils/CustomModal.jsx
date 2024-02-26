import React from "react";

const CustomModal = ({
  open,
  route,
  setOpen,
  setRoute,
  component: Component,
}) => {
  return (
<div className="shBr fixL">
  <div className="shBri fixLi">
    <div className="shBrs fixLs">
      <div className="shH fixH fixT" data-text={route+" to LearnGraduation"}>
        <label aria-label="Close" className="c cl" htmlFor="forAuth" onClick={() => setOpen(!open)} />
      </div>
      <Component setOpen={setOpen} setRoute={setRoute} />
      <br/>
      <br/>
    </div>
  </div>
  <label className="fCls" htmlFor="forAuth" onClick={() => setOpen(!open)} />
</div>
  );
};
export default CustomModal;
