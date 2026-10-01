/** Shared email-capture field styles: pill input on ink, ember button with ink label for AA contrast. */
export const SUBSCRIBE_INPUT_CLASS =
  "min-h-12 w-full flex-1 rounded-full border border-paper/15 bg-ink-800 px-5 text-base text-paper placeholder:text-paper/50 outline-none transition focus:border-ember focus:ring-4 focus:ring-ember/20 disabled:opacity-60 sm:min-h-14";

export const SUBSCRIBE_BUTTON_CLASS =
  "min-h-12 w-full shrink-0 whitespace-nowrap rounded-full bg-ember px-7 text-base font-semibold text-ink transition hover:bg-ember-soft active:scale-[0.98] disabled:cursor-default sm:min-h-14 sm:w-auto";

/** Primary pill button (links and non-form buttons). */
export const BUTTON_PRIMARY_CLASS =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ember px-7 text-base font-semibold text-ink transition hover:bg-ember-soft active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60";

/** Secondary pill button on ink. */
export const BUTTON_SECONDARY_CLASS =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-paper/20 px-7 text-base font-semibold text-paper transition hover:border-paper/40 hover:bg-paper/[0.05] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60";
