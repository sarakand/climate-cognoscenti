import Image from "next/image";

export default function Form() {
  return (
    <header class="bg-deepPurple">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">NatWest</span>
            <Image
              class="ml-8"
              src="/images/header-logo-natwest.svg"
              alt="NatWest"
              width="110"
              height="56"
            />
          </a>
        </div>
      </nav>
    </header>
  )
}
