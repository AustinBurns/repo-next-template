import {Root, FormField, FormLabel, FormMessage, FormDescription} from '@radix-ui/react-form'
export default function Registration() {
  return (
    <Root className="z-10 p-8">
  <FormField
    control={...}
    name="..."
    render={() => (
      <FormItem>
        <FormLabel />
        <FormControl>
          { /* Your form field */}
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
</Form>
    // <form className="z-10 p-8">
    //   <div>
    //     <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
    //       <div>
    //         <h2 className="text-base font-semibold leading-7 text-gray-900">
    //           Personal Information
    //         </h2>
    //         <p className="mt-1 text-sm leading-6 text-gray-600">
    //           Use a valid email and phone number so that you can recieve updates
    //           from your personal trainer.
    //         </p>
    //       </div>

    //       <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
    //         <div className="sm:col-span-3">
    //           <label
    //             htmlFor="first-name"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             First name
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               type="text"
    //               name="first-name"
    //               id="first-name"
    //               autoComplete="given-name"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>

    //         <div className="sm:col-span-3">
    //           <label
    //             htmlFor="last-name"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             Last name
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               type="text"
    //               name="last-name"
    //               id="last-name"
    //               autoComplete="family-name"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>

    //         <div className="sm:col-span-3">
    //           <label
    //             htmlFor="email"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             Email address
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               id="email"
    //               name="email"
    //               type="email"
    //               autoComplete="email"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>

    //         <div className="sm:col-span-3">
    //           <label
    //             htmlFor="phone-number"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             Phone Number
    //           </label>
    //           <div className="relative mt-2 rounded-md shadow-sm">
    //             <div className="absolute inset-y-0 left-0 flex items-center">
    //               <label htmlFor="country" className="sr-only">
    //                 Country
    //               </label>
    //               <select
    //                 id="country"
    //                 name="country"
    //                 autoComplete="country"
    //                 className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
    //               >
    //                 <option>US</option>
    //                 <option>CA</option>
    //                 <option>EU</option>
    //               </select>
    //             </div>
    //             <input
    //               type="text"
    //               name="phone-number"
    //               id="phone-number"
    //               className="block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //               placeholder="+1 (555) 987-6543"
    //             />
    //           </div>
    //         </div>

    //         <div className="sm:col-span-2 sm:col-start-1">
    //           <label
    //             htmlFor="height"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             Height
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               type="text"
    //               name="height"
    //               id="height"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>

    //         <div className="sm:col-span-2">
    //           <label
    //             htmlFor="weight"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             Weight
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               type="text"
    //               name="weight"
    //               id="weight"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>

    //         <div className="sm:col-span-2">
    //           <label
    //             htmlFor="country"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             Gender
    //           </label>
    //           <div className="mt-2">
    //             <select
    //               id="gender"
    //               name="gender"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
    //             >
    //               <option>Female</option>
    //               <option>Male</option>
    //               <option>Non-binary</option>
    //             </select>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
    //       <div>
    //         <h2 className="text-base font-semibold leading-7 text-gray-900">
    //           General information and Lifestyle
    //         </h2>
    //         <p className="mt-1 text-sm leading-6 text-gray-600">
    //           Brief description of day to day living and aspirations for
    //           committing to personal training.
    //         </p>
    //       </div>

    //       <div className="max-w-2xl space-y-10 md:col-span-2">
    //         <fieldset>
    //           <legend className="text-sm font-semibold leading-6 text-gray-900">
    //             Do you have any prior experience in the gym?
    //           </legend>
    //           <div className="mt-3 space-y-3">
    //             <div className="flex items-center gap-x-3">
    //               <input
    //                 id="yes-gym-experience"
    //                 name="gym-experience"
    //                 type="radio"
    //                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //               />
    //               <label
    //                 htmlFor="yes-gym-experience"
    //                 className="block text-sm font-medium leading-6 text-gray-700"
    //               >
    //                 yes
    //               </label>
    //             </div>
    //             <div className="flex items-center gap-x-3">
    //               <input
    //                 id="no-gym-experience"
    //                 name="gym-experience"
    //                 type="radio"
    //                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //               />
    //               <label
    //                 htmlFor="no-gym-experience"
    //                 className="block text-sm font-medium leading-6 text-gray-700"
    //               >
    //                 no
    //               </label>
    //             </div>
    //           </div>
    //         </fieldset>
    //         <fieldset>
    //           <legend className="text-sm font-semibold leading-6 text-gray-900">
    //             How would you describe your current activity level?
    //           </legend>
    //           <div className="mt-3 space-y-3">
    //             <div className="flex items-center gap-x-3">
    //               <input
    //                 id="activity-level-sedentary"
    //                 name="activity-level"
    //                 type="radio"
    //                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //               />
    //               <label
    //                 htmlFor="activity-level-sedentary"
    //                 className="block text-sm font-medium leading-6 text-gray-700"
    //               >
    //                 Sedentary: little to no exercise
    //               </label>
    //             </div>
    //             <div className="flex items-center gap-x-3">
    //               <input
    //                 id="activity-level-light"
    //                 name="activity-level"
    //                 type="radio"
    //                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //               />
    //               <label
    //                 htmlFor="activity-level-light"
    //                 className="block text-sm font-medium leading-6 text-gray-700"
    //               >
    //                 Lightly Active: light exercise 1-3 days weekly
    //               </label>
    //             </div>
    //             <div className="flex items-center gap-x-3">
    //               <input
    //                 id="activity-level-moderate"
    //                 name="activity-level"
    //                 type="radio"
    //                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //               />
    //               <label
    //                 htmlFor="activity-level-moderate"
    //                 className="block text-sm font-medium leading-6 text-gray-700"
    //               >
    //                 Moderately Active: moderate exercise 3 days weekly
    //               </label>
    //             </div>
    //             <div className="flex items-center gap-x-3">
    //               <input
    //                 id="activity-level-very"
    //                 name="activity-level"
    //                 type="radio"
    //                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //               />
    //               <label
    //                 htmlFor="activity-level-very"
    //                 className="block text-sm font-medium leading-6 text-gray-700"
    //               >
    //                 Very Active: moderate to rigorous exercise +3 days weekly
    //               </label>
    //             </div>
    //           </div>
    //         </fieldset>
    //         <fieldset>
    //           <div className="col-span-full">
    //             <label
    //               htmlFor="current-training"
    //               className="block text-sm font-medium leading-6 text-gray-900"
    //             >
    //               If you are currently going to a gym, please provide a detailed
    //               description of your current training below.
    //             </label>
    //             <div className="mt-2">
    //               <textarea
    //                 id="current-training"
    //                 name="current-training"
    //                 rows={3}
    //                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //                 defaultValue={""}
    //               />
    //             </div>
    //           </div>
    //         </fieldset>
    //       </div>
    //     </div>

    //     <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
    //       <div>
    //         <h2 className="text-base font-semibold leading-7 text-gray-900">
    //           Nutrition
    //         </h2>
    //         <p className="mt-1 text-sm leading-6 text-gray-600">
    //           Day to day eating habits and overall choices.
    //         </p>
    //       </div>

    //       <div className="max-w-2xl space-y-10 md:col-span-2">
    //         <fieldset>
    //           <legend className="text-sm font-semibold leading-6 text-gray-900">
    //             How many meals do you eat per day?
    //           </legend>
    //           <div className="mt-3 space-y-3">
    //             <div className="flex items-center gap-x-3">
    //               <input
    //                 id="meals-one-to-two"
    //                 name="meals-per-day"
    //                 type="radio"
    //                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //               />
    //               <label
    //                 htmlFor="meals-one-to-two"
    //                 className="block text-sm font-medium leading-6 text-gray-700"
    //               >
    //                 1-2 meals
    //               </label>
    //             </div>
    //             <div className="flex items-center gap-x-3">
    //               <input
    //                 id="meals-two-to-three"
    //                 name="meals-per-day"
    //                 type="radio"
    //                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //               />
    //               <label
    //                 htmlFor="meals-two-to-three"
    //                 className="block text-sm font-medium leading-6 text-gray-700"
    //               >
    //                 2-3 meals
    //               </label>
    //             </div>
    //             <div className="flex items-center gap-x-3">
    //               <input
    //                 id="meals-three-to-five"
    //                 name="meals-per-day"
    //                 type="radio"
    //                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //               />
    //               <label
    //                 htmlFor="meals-three-to-five"
    //                 className="block text-sm font-medium leading-6 text-gray-700"
    //               >
    //                 3-5 meals
    //               </label>
    //             </div>
    //           </div>
    //         </fieldset>
    //         <fieldset>
    //           <div className="col-span-full">
    //             <label
    //               htmlFor="general-eating-routine"
    //               className="block text-sm font-medium leading-6 text-gray-900"
    //             >
    //               Briefly describe a general day of eating for you.
    //             </label>
    //             <div className="mt-2">
    //               <textarea
    //                 id="general-eating-routine"
    //                 name="general-eating-routine"
    //                 rows={3}
    //                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //                 defaultValue={""}
    //               />
    //             </div>
    //           </div>
    //         </fieldset>
    //         <fieldset>
    //           <legend className="text-sm font-semibold leading-6 text-gray-900">
    //             Do you know what calories/macronutrients are?
    //           </legend>
    //           <div className="mt-3 space-y-3">
    //             <div className="flex items-center gap-x-3">
    //               <input
    //                 id="macros-understanding-yes"
    //                 name="macros-understanding"
    //                 type="radio"
    //                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //               />
    //               <label
    //                 htmlFor="macros-understanding-yes"
    //                 className="block text-sm font-medium leading-6 text-gray-700"
    //               >
    //                 Yes
    //               </label>
    //             </div>
    //             <div className="flex items-center gap-x-3">
    //               <input
    //                 id="macros-understanding-no"
    //                 name="macros-understanding"
    //                 type="radio"
    //                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //               />
    //               <label
    //                 htmlFor="macros-understanding-no"
    //                 className="block text-sm font-medium leading-6 text-gray-700"
    //               >
    //                 No
    //               </label>
    //             </div>
    //             <div className="flex items-center gap-x-3">
    //               <input
    //                 id="macros-understanding-not-fully"
    //                 name="macros-understanding"
    //                 type="radio"
    //                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //               />
    //               <label
    //                 htmlFor="macros-understanding-not-fully"
    //                 className="block text-sm font-medium leading-6 text-gray-700"
    //               >
    //                 I&apos;m familiar, but don&apos;t fully understand
    //               </label>
    //             </div>
    //           </div>
    //         </fieldset>
    //         <fieldset>
    //           <legend className="text-sm font-semibold leading-6 text-gray-900">
    //             Do you know how to track your meals?
    //           </legend>
    //           <div className="mt-3 space-y-3">
    //             <div className="flex items-center gap-x-3">
    //               <input
    //                 id="tracking-meals-yes"
    //                 name="tracking-meals"
    //                 type="radio"
    //                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //               />
    //               <label
    //                 htmlFor="tracking-meals-yes"
    //                 className="block text-sm font-medium leading-6 text-gray-700"
    //               >
    //                 Yes
    //               </label>
    //             </div>
    //             <div className="flex items-center gap-x-3">
    //               <input
    //                 id="tracking-meals-no"
    //                 name="tracking-meals"
    //                 type="radio"
    //                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //               />
    //               <label
    //                 htmlFor="tracking-meals-no"
    //                 className="block text-sm font-medium leading-6 text-gray-700"
    //               >
    //                 No
    //               </label>
    //             </div>
    //           </div>
    //         </fieldset>
    //         <fieldset>
    //           <div className="col-span-full">
    //             <label
    //               htmlFor="nutrition-struggle"
    //               className="block text-sm font-medium leading-6 text-gray-900"
    //             >
    //               What do you struggle with most in regards to nutrition?
    //             </label>
    //             <div className="mt-2">
    //               <textarea
    //                 id="nutrition-struggle"
    //                 name="nutrition-struggle"
    //                 rows={3}
    //                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //                 defaultValue={""}
    //               />
    //             </div>
    //           </div>
    //         </fieldset>
    //       </div>
    //     </div>
    //     <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
    //       <div>
    //         <h2 className="text-base font-semibold leading-7 text-gray-900">
    //           Health
    //         </h2>
    //         <p className="mt-1 text-sm leading-6 text-gray-600">
    //           Overview of medical history.
    //         </p>
    //       </div>

    //       <div className="max-w-2xl space-y-10 md:col-span-2">
    //         <fieldset>
    //           <div className="col-span-full">
    //             <label
    //               htmlFor="medical-conditions"
    //               className="block text-sm font-medium leading-6 text-gray-900"
    //             >
    //               Do you have any injuries and/or medical conditions (diabetes,
    //               hypertension, etc.)
    //             </label>
    //             <div className="mt-2">
    //               <textarea
    //                 id="medical-conditions"
    //                 name="medical-conditions"
    //                 rows={3}
    //                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //                 defaultValue={""}
    //               />
    //             </div>
    //           </div>
    //         </fieldset>
    //         <fieldset>
    //           <div className="col-span-full">
    //             <label
    //               htmlFor="previous-surgery"
    //               className="block text-sm font-medium leading-6 text-gray-900"
    //             >
    //               Have you ever had surgery? If so, what kind of surgery?
    //             </label>
    //             <div className="mt-2">
    //               <textarea
    //                 id="previous-surgery"
    //                 name="previous-surgery"
    //                 rows={3}
    //                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //                 defaultValue={""}
    //               />
    //             </div>
    //           </div>
    //         </fieldset>
    //         <fieldset>
    //           <legend className="text-sm font-semibold leading-6 text-gray-900">
    //             Are you currently in or have been to physical therapy post-op?
    //           </legend>
    //           <div className="mt-3 space-y-3">
    //             <div className="flex items-center gap-x-3">
    //               <input
    //                 id="physical-therapy-yes"
    //                 name="physical-therapy"
    //                 type="radio"
    //                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //               />
    //               <label
    //                 htmlFor="physical-therapy-yes"
    //                 className="block text-sm font-medium leading-6 text-gray-700"
    //               >
    //                 Yes
    //               </label>
    //             </div>
    //             <div className="flex items-center gap-x-3">
    //               <input
    //                 id="physical-therapy-no"
    //                 name="physical-therapy"
    //                 type="radio"
    //                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //               />
    //               <label
    //                 htmlFor="macros-understanding-no"
    //                 className="block text-sm font-medium leading-6 text-gray-700"
    //               >
    //                 No
    //               </label>
    //             </div>
    //           </div>
    //         </fieldset>
    //         <fieldset>
    //           <div className="col-span-full">
    //             <label
    //               htmlFor="current-aches"
    //               className="block text-sm font-medium leading-6 text-gray-900"
    //             >
    //               Do you tend to experience any aches, pains, or shortness of
    //               breath? If so, explain if possible.
    //             </label>
    //             <div className="mt-2">
    //               <textarea
    //                 id="current-aches"
    //                 name="current-aches"
    //                 rows={3}
    //                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //                 defaultValue={""}
    //               />
    //             </div>
    //           </div>
    //         </fieldset>
    //         <fieldset>
    //           <div className="col-span-full">
    //             <label
    //               htmlFor="current-pain"
    //               className="block text-sm font-medium leading-6 text-gray-900"
    //             >
    //               Do you experience any pain or swelling of your joints? If so,
    //               explain if possible.
    //             </label>
    //             <div className="mt-2">
    //               <textarea
    //                 id="current-pain"
    //                 name="current-pain"
    //                 rows={3}
    //                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //                 defaultValue={""}
    //               />
    //             </div>
    //           </div>
    //         </fieldset>
    //         <fieldset>
    //           <div className="col-span-full">
    //             <label
    //               htmlFor="current-medication"
    //               className="block text-sm font-medium leading-6 text-gray-900"
    //             >
    //               Are you currently on any medication?
    //             </label>
    //             <div className="mt-2">
    //               <textarea
    //                 id="current-medication"
    //                 name="current-medication"
    //                 rows={3}
    //                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //                 defaultValue={""}
    //               />
    //             </div>
    //           </div>
    //         </fieldset>
    //         <fieldset>
    //           <div className="col-span-full">
    //             <label
    //               htmlFor="general-comment"
    //               className="block text-sm font-medium leading-6 text-gray-900"
    //             >
    //               Please leave a comment or question below if need be.
    //             </label>
    //             <div className="mt-2">
    //               <textarea
    //                 id="general-comment"
    //                 name="general-comment"
    //                 rows={3}
    //                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //                 defaultValue={""}
    //               />
    //             </div>
    //           </div>
    //         </fieldset>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="mt-6 flex items-center justify-end gap-x-6">
    //     <button
    //       type="button"
    //       className="text-sm font-semibold leading-6 text-gray-900"
    //     >
    //       Cancel
    //     </button>
    //     <button
    //       type="submit"
    //       className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //     >
    //       Submit
    //     </button>
    //   </div>
    // </form>
  );
}
