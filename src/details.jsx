import { useContext } from "react";
import { DetailContext } from "./context/detailcontext";
import { useForm } from "react-hook-form";

export const Details = () => {
  const { details, mail } = useContext(DetailContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: details.firstName,
      lastName: details.lastName,
      phone: details.phone,
      email: mail,
      Address: details.Address,
      city: details.city,
      country: details.country,
    },
  });

  return (
    <div>
      <h1>Details</h1>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input placeholder="bill" {...register("firstName")} />

        <label htmlFor="lastName">Last Name</label>
        <input placeholder="l" {...register("lastName")} />

        <label htmlFor="lastName">Last Name</label>
        <input placeholder="l" {...register("phone")} />

        <label htmlFor="email">Email</label>
        <input
          placeholder="bluebill1049@hotmail.com"
          type="email"
          {...register("email")}
        />

        <label htmlFor="lastName">Address</label>
        <input placeholder="Address" {...register("Address")} />

        <label htmlFor="lastName">city</label>
        <input placeholder="City" {...register("city")} />

        <label htmlFor="lastName">Country</label>
        <input placeholder="Country" {...register("country")} />
      </form>
    </div>
  );
};
