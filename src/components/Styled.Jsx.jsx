export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled jsx -</p>
        <button className="button">BUTTON</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          margin: 8px;
          padding: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #3d84a8;
        }

        .button {
          background-color: abedd8;
          border: none;
          padding: 8px;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
};
