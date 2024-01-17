export default function Input({ label, onChange, value }) {
  return (
    <p>
      <label>{label}</label>
      <input type="number" required onChange={onChange} value={value}></input>
    </p>
  );
}
