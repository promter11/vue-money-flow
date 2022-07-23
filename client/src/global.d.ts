import {
  CURRENCY_EUR,
  CURRENCY_GBP,
  CURRENCY_RUB,
  CURRENCY_USD,
  CURRENCY_YEN,
} from "@/utils/constants";

type DateTimeString = string;

type Currency =
  | typeof CURRENCY_EUR
  | typeof CURRENCY_GBP
  | typeof CURRENCY_RUB
  | typeof CURRENCY_USD
  | typeof CURRENCY_YEN;
