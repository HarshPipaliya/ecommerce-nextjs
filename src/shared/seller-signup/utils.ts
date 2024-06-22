export type StepTypes = {
  currentStep: number;
  handleNextClick: () => Promise<void>;
  handlePrevClick: () => void;
};

export const steps = [
  {
    step: 1,
    stepName: "Personal Info",
  },
  {
    step: 2,
    stepName: "Business Info",
  },
  {
    step: 3,
    stepName: "Password & Security",
  },
];

export enum BusinessType {
  FOOD = "food",
  BEAUTY_AND_PERSONAL_CARE = "beuty-and-personal-care",
  ELECTRONICS = "electronics",
  PERSONALIZE = "personalize",
  BABY_PRODUCTS = "baby-products",
  HOME_AND_GARDEN = "home-and-garden",
  GROCERIES = "groceries",
  CLOTHES = "clothes",
}

export const BusinessTypes = [
  {
    label: "Food",
    value: BusinessType.FOOD,
  },
  {
    label: "Beauty and Personal Care",
    value: BusinessType.BEAUTY_AND_PERSONAL_CARE,
  },
  {
    label: "Electrnoics",
    value: BusinessType.ELECTRONICS,
  },
  {
    label: "Personalize",
    value: BusinessType.PERSONALIZE,
  },
  {
    label: "Baby Products",
    value: BusinessType.BABY_PRODUCTS,
  },
  {
    label: "Groceries",
    value: BusinessType.GROCERIES,
  },
  {
    label: "Clothes",
    value: BusinessType.CLOTHES,
  },
];
