import { Switch } from '@headlessui/react'
import { useEffect, useState } from 'react'

export default function SwitchBtn() {
  const [enabled, setEnabled] = useState(true)
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setEnabled(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Apply or remove dark class when toggled
  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [enabled]);
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className="dark:bg-gray-600 group relative flex h-7 w-14 cursor-pointer rounded-full bg-white p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-white/10 data-focus:outline data-focus:outline-white"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7"
      />
    </Switch>
  )
}
