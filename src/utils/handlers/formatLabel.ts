import PartnerStatus from "../enums/partnerStatus";

const formatLabel = (label: string) => {
  let normalizedLabel = label;

  const findStatus = Object.entries(PartnerStatus).find(
    ([key, _]) => key === label
  );

  if (findStatus) {
    const [statusKey, statusValue] = findStatus;
    normalizedLabel = statusValue;
  }

  return (
    normalizedLabel.charAt(0).toUpperCase() +
    normalizedLabel.slice(1).toLowerCase()
  );
};

export default formatLabel;
