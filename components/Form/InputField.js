export const InputField = ({ label, register, type, error }) => (
  <>
    <label>{label}</label>
    <input
      style={{ background: 'gray' }}
      type={type}
      {...register(label)}
    ></input>
    <p>{error}</p>
  </>
)
