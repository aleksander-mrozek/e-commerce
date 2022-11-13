import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const checkoutFormSchema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    emailAddress: yup.string().email().required(),
    phoneNumber: yup.string().required(),
    cardNumber: yup.string().required(),
    cardExpirationDate: yup.string().required(),
    cardCVC: yup.string().required(),
    address: yup.string().required(),
    city: yup.string().required(),
    postalCode: yup.string().required(),
    country: yup.string().required(),
  })
  .required();

type CheckoutFormData = yup.InferType<typeof checkoutFormSchema>;

export const CheckoutForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: yupResolver(checkoutFormSchema),
  });
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <section>
      <h1 className="sr-only">Checkout</h1>

      <div className="relative mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-50 py-12 md:py-24">
            <div className="mx-auto max-w-lg px-4 lg:px-8">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h2 className="ml-4 font-medium">Username</h2>
              </div>

              <div className="mt-8">
                <p className="text-2xl font-medium tracking-tight mb-12">
                  Total: $99.99
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  For the purchase of:
                </p>
              </div>

              <div className="mt-12">
                <div className="flow-root">
                  <ul className="-my-4 divide-y divide-gray-200">
                    <li className="flex items-center justify-between py-4">
                      <div className="flex items-start">
                        <Image
                          alt="Scarf"
                          src="https://picsum.photos/id/758/150/100"
                          className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                          width={150}
                          height={100}
                        />

                        <div className="ml-4">
                          <p className="text-sm">Scarf</p>

                          <dl className="mt-1 space-y-1 text-xs text-gray-500">
                            <div>
                              <dt className="inline">Color: </dt>
                              <dd className="inline">Mixed</dd>
                            </div>

                            <div>
                              <dt className="inline">Material: </dt>
                              <dd className="inline">100% wool</dd>
                            </div>
                          </dl>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm">
                          $49.99
                          <small className="text-gray-500 pl-2">x1</small>
                        </p>
                      </div>
                    </li>

                    <li className="flex items-center justify-between py-4">
                      <div className="flex items-start">
                        <Image
                          alt="Shoes"
                          src="https://picsum.photos/id/21/150/100"
                          className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                          width={150}
                          height={100}
                        />

                        <div className="ml-4">
                          <p className="text-sm">Shoes</p>

                          <dl className="mt-1 space-y-1 text-xs text-gray-500">
                            <div>
                              <dt className="inline">Size: </dt>
                              <dd className="inline">37</dd>
                            </div>
                          </dl>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm">
                          $79
                          <small className="text-gray-500 pl-2">x1</small>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white py-12 md:py-24">
            <div className="mx-auto max-w-lg px-4 lg:px-8">
              <form onSubmit={onSubmit} className="grid grid-cols-6 gap-4">
                <div className="col-span-3">
                  <label
                    className="mb-1 block text-sm text-gray-600"
                    htmlFor="first_name"
                  >
                    First Name
                  </label>

                  <input
                    className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                    type="text"
                    id="first_name"
                    {...register("firstName")}
                  />
                </div>

                <div className="col-span-3">
                  <label
                    className="mb-1 block text-sm text-gray-600"
                    htmlFor="last_name"
                  >
                    Last Name
                  </label>

                  <input
                    className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                    type="text"
                    id="last_name"
                    {...register("lastName")}
                  />
                </div>

                <div className="col-span-6">
                  <label
                    className="mb-1 block text-sm text-gray-600"
                    htmlFor="email"
                  >
                    Email
                  </label>

                  <input
                    className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                    type="email"
                    id="email"
                    {...register("emailAddress")}
                  />
                </div>

                <div className="col-span-6">
                  <label
                    className="mb-1 block text-sm text-gray-600"
                    htmlFor="phone"
                  >
                    Phone
                  </label>

                  <input
                    className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                    type="tel"
                    id="phone"
                    {...register("phoneNumber")}
                  />
                </div>

                <fieldset className="col-span-6">
                  <legend className="mb-1 block text-sm text-gray-600">
                    Card Details
                  </legend>

                  <div className="-space-y-px rounded-lg bg-white shadow-sm">
                    <div>
                      <label className="sr-only" htmlFor="card-number">
                        Card Number
                      </label>

                      <input
                        className="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                        type="text"
                        id="card-number"
                        placeholder="Card number"
                        {...register("cardNumber")}
                      />
                    </div>

                    <div className="flex -space-x-px">
                      <div className="flex-1">
                        <label
                          className="sr-only"
                          htmlFor="card-expiration-date"
                        >
                          Expiration Date
                        </label>

                        <input
                          className="relative w-full rounded-bl-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                          type="text"
                          id="card-expiration-date"
                          placeholder="MM / YY"
                          {...register("cardExpirationDate")}
                        />
                      </div>

                      <div className="flex-1">
                        <label className="sr-only" htmlFor="card-cvc">
                          CVC
                        </label>

                        <input
                          className="relative w-full rounded-br-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                          type="text"
                          id="card-cvc"
                          placeholder="CVC"
                          {...register("cardCVC")}
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="col-span-6">
                  <legend className="mb-1 block text-sm text-gray-600">
                    Billing details
                  </legend>

                  <div className="-space-y-px rounded-lg bg-white shadow-sm">
                    <div>
                      <label className="sr-only" htmlFor="address">
                        Address
                      </label>

                      <input
                        className="relative w-full rounded-b-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                        type="text"
                        id="address"
                        autoComplete="address"
                        placeholder="Address"
                        {...register("address")}
                      />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="city">
                        City
                      </label>

                      <input
                        className="relative w-full rounded-b-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                        type="text"
                        id="city"
                        autoComplete="city"
                        placeholder="City"
                        {...register("city")}
                      />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="postal-code">
                        Postal Code
                      </label>

                      <input
                        className="relative w-full rounded-b-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                        type="text"
                        id="postal-code"
                        autoComplete="postal-code"
                        placeholder="Postal Code"
                        {...register("postalCode")}
                      />
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="country">
                        Country
                      </label>

                      <select
                        className="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm focus:z-10"
                        id="country"
                        autoComplete="country-name"
                        {...register("country")}
                      >
                        <option>Poland</option>
                        <option>USA</option>
                        <option>Germany</option>
                      </select>
                    </div>
                  </div>
                </fieldset>

                <div className="col-span-6">
                  <button
                    className="block w-full rounded-lg bg-black p-2.5 text-sm text-white"
                    type="submit"
                  >
                    Proceed with transaction
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
