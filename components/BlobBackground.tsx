interface IBlobBackground {
  widthBlob: number,
  heightBlob: number,
  transformBlob: string,
}

export default function BlobBackground({widthBlob, heightBlob, transformBlob}: IBlobBackground) {
  return(
    <svg width={widthBlob} height={heightBlob} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#84cc16" d="M22,-28.3C29.8,-19.5,38.6,-13.9,41.8,-5.8C45.1,2.3,42.9,12.9,39.9,27.8C36.9,42.6,33.2,61.8,23.2,66.6C13.3,71.4,-2.9,61.9,-17.9,54.2C-32.8,46.5,-46.6,40.7,-52,30.5C-57.3,20.2,-54.3,5.6,-50.3,-7.5C-46.4,-20.6,-41.5,-32.1,-33,-40.8C-24.4,-49.4,-12.2,-55.2,-2.6,-52.1C7,-49,14.1,-37.1,22,-28.3Z" transform={"translate(100 100) " + transformBlob} />
    </svg>
  );
}