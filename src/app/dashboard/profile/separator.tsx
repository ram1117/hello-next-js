const Separator = ({ distance }: { distance: number }) => {
  return (
    <div
      className={`bg-blue-200`}
      style={{
        width: `${distance}px`,
        height:'5px'
      }}
    ></div>
  );
};

export default Separator;
