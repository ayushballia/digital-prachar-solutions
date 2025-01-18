import { ShareIcon, MagnifyingGlassIcon, CurrencyDollarIcon, UserGroupIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'SEO',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'content marketing',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: DocumentTextIcon,
  },
  {
    name: 'social media marketing',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ShareIcon,
  },
  {
    name: 'PPC advertising',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'influencer marketing',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: UserGroupIcon,
  },
]

export default function Feature() {
  return (
    <div className="bg-white py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Having Years of Experience </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
          Transforming strategies into results with the power of digital marketing
          </p>
          <p className="mt-6 text-lg/8 text-indigo-950">
          Empowering businesses to thrive in the digital era with innovative marketing solutions tailored to your goals. We turn insights into impact, delivering measurable results that drive growth and success.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900 capitalize">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-[#d34c50]">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
