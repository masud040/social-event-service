import PropTypes from "prop-types";

const Member = ({ member }) => {
  const { image, name, position } = member || {};
  return (
    <div className="text-center text-xl">
      <img src={image} className="" alt="" />
      <p className=" text-2xl font-bold my-2">{name}</p>
      <p>{position}</p>
    </div>
  );
};
Member.propTypes = {
  member: PropTypes.object,
};

export default Member;
