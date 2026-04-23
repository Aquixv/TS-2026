import type { StatusState } from "./types";
type StatusProps = {
  status: StatusState; 
}

const Status = ({ status }: StatusProps) => {
  let message;
  
  if (status === "loading") {
    message = "Loading...";
  } else if (status === "success") {
    message = "Data successfully fetched!";
  } else if (status === "error") {
    message = "Error fetching data!";
  }

  return (
    <div style={{ padding: '20px', border: 'none', marginTop: '20px' }}>
      <h2>Status: {message}</h2>
    </div>
  );
};

export default Status;