import EnumErrors from "../../utils/errors/Enum.errors.js";

export default (error, req, res, next) => {
  console.log(error.cause);
  switch (error.code) {
    case EnumErrors.INVALID_TYPES_ERROR:
      res.json({ status: "error", error: error.name });
      break;

    default:
      res.json({ status: "error", error: "Unhandled error" });
  }
};
