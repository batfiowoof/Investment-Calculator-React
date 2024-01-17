import Input from "./Input";

export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          label="Initial Investment"
          onChange={(event) =>
            onChange("initialInvestment", event.target.value)
          }
          value={userInput.initialInvestment}
        />
        <Input
          label="Annual Investment"
          onChange={(event) => onChange("annualInvestment", event.target.value)}
          value={userInput.annualInvestment}
        />
      </div>
      <div className="input-group">
        <Input
          label="Expected Return"
          onChange={(event) => onChange("expectedReturn", event.target.value)}
          value={userInput.expectedReturn}
        />
        <Input
          label="Duration"
          onChange={(event) => onChange("duration", event.target.value)}
          value={userInput.duration}
        />
      </div>
    </section>
  );
}
