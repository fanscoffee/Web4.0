'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  breakfastHero,
  breakfastPrices,
  baseOptions,
  extras,
  galleryImages,
  normalDrinks,
  specialDrinks
} from './data'
import type { BaseOption, Drink, DrinkCategory, Extra } from './data'

const toastOptions = baseOptions.filter(option => option.category === 'toast')
const bakeryOptions = baseOptions.filter(option => option.category === 'bakery')

const formatPrice = (price: number) => `${price.toFixed(2).replace('.', ',')} €`

export default function BreakfastBuilder() {
  const [selectedBaseId, setSelectedBaseId] = useState(baseOptions[0].id)
  const [selectedDrinkCategory, setSelectedDrinkCategory] =
    useState<DrinkCategory>('normal')
  const [selectedExtraNames, setSelectedExtraNames] = useState<string[]>([])

  const selectedBase =
    baseOptions.find(option => option.id === selectedBaseId) ?? baseOptions[0]
  const isToast = selectedBase.category === 'toast'
  const canAddExtras = selectedBase.allowsExtras
  const basePrice =
    breakfastPrices[selectedBase.category][selectedDrinkCategory]
  const selectedExtras = canAddExtras
    ? extras.filter(extra => selectedExtraNames.includes(extra.name))
    : []
  const extrasPrice = selectedExtras.reduce(
    (total, extra) => total + extra.price,
    0
  )
  const totalPrice = basePrice + extrasPrice

  const selectBase = (option: BaseOption) => {
    setSelectedBaseId(option.id)
    if (!option.allowsExtras) setSelectedExtraNames([])
  }

  const toggleExtra = (extra: Extra) => {
    if (!isToast) return
    setSelectedExtraNames(current =>
      current.includes(extra.name)
        ? current.filter(name => name !== extra.name)
        : [...current, extra.name]
    )
  }

  return (
    <main className='min-h-screen overflow-hidden bg-[#fcf8f1] pt-20 text-brown md:pt-28'>
      <section className='border-b border-brown/10'>
        <div className='mx-auto grid max-w-7xl gap-8 px-4 pb-12 pt-8 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-14 md:px-8 md:pb-24 md:pt-12'>
          <div>
            <p className='mb-5 text-xs font-bold uppercase tracking-[0.28em] text-green'>
              FANS / DESAYUNOS
            </p>
            <h1 className='max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-dark-green sm:text-5xl md:text-6xl'>
              Empieza el día <span className='text-green'>con algo bueno.</span>
            </h1>
            <p className='mt-6 max-w-lg text-base leading-7 text-brown/70 md:text-lg'>
              Elige entre tostadas o bollería, suma tu bebida favorita y añade
              ese extra que hace que el desayuno sea realmente tuyo.
            </p>
            <div className='mt-8 flex flex-col gap-4 sm:flex-row sm:items-center'>
              <a
                href='#elige'
                className='inline-flex min-h-12 items-center justify-center rounded-full bg-green px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-dark-green'
              >
                Monta tu desayuno <span className='ml-2 text-lg'>↓</span>
              </a>
              <p className='text-sm text-brown/60'>
                Desde{' '}
                <strong className='text-base text-dark-green'>2,90 €</strong>
              </p>
            </div>
            <div className='mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-brown/15 pt-5'>
              <div>
                <p className='text-2xl font-bold text-dark-green'>4</p>
                <p className='mt-1 text-xs uppercase tracking-wide text-brown/60'>
                  combinaciones
                </p>
              </div>
              <div>
                <p className='text-2xl font-bold text-dark-green'>7:00</p>
                <p className='mt-1 text-xs uppercase tracking-wide text-brown/60'>
                  abrimos
                </p>
              </div>
              <div>
                <p className='text-2xl font-bold text-dark-green'>100%</p>
                <p className='mt-1 text-xs uppercase tracking-wide text-brown/60'>
                  a tu gusto
                </p>
              </div>
            </div>
          </div>

          <figure className='relative min-h-[21rem] overflow-hidden rounded-[2rem] bg-brown shadow-2xl shadow-brown/20 sm:min-h-[28rem] md:min-h-[38rem]'>
            <Image
              src={breakfastHero.src}
              alt={breakfastHero.alt}
              fill
              priority
              sizes='(max-width: 768px) 100vw, 55vw'
              className='object-cover'
              style={{ objectPosition: 'center 58%' }}
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/10' />
            <figcaption className='absolute bottom-0 left-0 right-0 p-6 text-white md:p-8'>
              <p className='text-xs font-bold uppercase tracking-[0.25em] text-light-yellow'>
                Recién hecho
              </p>
              <p className='mt-2 max-w-xs text-2xl font-bold leading-tight'>
                Bollería dorada, café caliente y cero prisas.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        id='elige'
        className='scroll-mt-24 px-4 py-12 sm:px-6 md:px-8 md:py-24'
      >
        <div className='mx-auto max-w-7xl'>
          <div className='mb-8 max-w-2xl md:mb-10'>
            <p className='mb-3 text-xs font-bold uppercase tracking-[0.28em] text-green'>
              Tu combinación
            </p>
            <h2 className='text-3xl font-bold leading-tight text-dark-green md:text-5xl'>
              Elige cómo empieza tu mañana.
            </h2>
            <p className='mt-4 text-base leading-7 text-brown/65'>
              Primero selecciona una base. Después elige tu bebida y comprueba
              al instante el precio de tu desayuno.
            </p>
          </div>

          <div className='rounded-[1.75rem] border border-brown/10 bg-white p-4 shadow-sm sm:p-6 md:rounded-[2rem] md:p-8'>
            <StepHeading
              number='01'
              title='Elige tu base'
              description='Las tostadas y la bollería tienen precios diferentes.'
            />

            <BaseGroup
              title='Tostadas'
              description='Pan normal, integral o croissant con mermelada.'
              category='toast'
              options={toastOptions}
              selectedId={selectedBaseId}
              onSelect={selectBase}
            />

            <div className='my-8 border-t border-brown/10' />

            <BaseGroup
              title='Bollería'
              description='Croissants y napolitanas para un desayuno dulce.'
              category='bakery'
              options={bakeryOptions}
              selectedId={selectedBaseId}
              onSelect={selectBase}
            />
          </div>

          <div className='mt-6 grid gap-6 lg:mt-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-8'>
            <section className='rounded-[1.75rem] bg-dark-green p-4 text-white sm:p-6 md:rounded-[2rem] md:p-8'>
              <StepHeading
                number='02'
                title='Elige tu bebida'
                description='El precio cambia según la base que hayas elegido.'
                inverted
              />
              <div className='grid gap-4 md:grid-cols-2'>
                <DrinkOption
                  category='normal'
                  price={breakfastPrices[selectedBase.category].normal}
                  drinks={normalDrinks}
                  selected={selectedDrinkCategory === 'normal'}
                  onSelect={() => setSelectedDrinkCategory('normal')}
                />
                <DrinkOption
                  category='special'
                  price={breakfastPrices[selectedBase.category].special}
                  drinks={specialDrinks}
                  selected={selectedDrinkCategory === 'special'}
                  onSelect={() => setSelectedDrinkCategory('special')}
                />
              </div>
            </section>

            <ExtrasPanel
              enabled={canAddExtras}
              isToast={isToast}
              selectedNames={selectedExtraNames}
              onToggle={toggleExtra}
            />
          </div>

          <BreakfastSummary
            base={selectedBase}
            drinkCategory={selectedDrinkCategory}
            selectedExtras={selectedExtras}
            total={totalPrice}
          />

          <div className='mt-6 flex flex-col gap-4 rounded-2xl border border-green/20 bg-beige p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6'>
            <div>
              <p className='text-lg font-bold text-dark-green'>
                Horario del desayuno
              </p>
              <p className='mt-1 text-sm text-brown/70'>
                Lunes a viernes, de <strong>7:00 a 14:00</strong>. Consulta
                disponibilidad para fines de semana.
              </p>
            </div>
            <span className='w-fit rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-green'>
              Te esperamos
            </span>
          </div>
        </div>
      </section>

      <section className='bg-dark-green px-4 py-14 text-white sm:px-6 md:px-8 md:py-24'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-8 flex flex-col justify-between gap-5 md:mb-10 md:flex-row md:items-end'>
            <div className='max-w-xl'>
              <p className='mb-3 text-xs font-bold uppercase tracking-[0.28em] text-light-yellow'>
                De nuestra vitrina
              </p>
              <h2 className='text-3xl font-bold leading-tight md:text-5xl'>
                Horneado para el primer bocado.
              </h2>
            </div>
            <p className='max-w-sm text-sm leading-6 text-white/65'>
              Si hoy te apetece algo dulce, aquí tienes una vista de nuestra
              bollería recién hecha.
            </p>
          </div>
          <div className='grid gap-4 sm:grid-cols-3 sm:gap-5'>
            {galleryImages.map((item, index) => (
              <figure
                key={item.src}
                className={`group relative overflow-hidden rounded-[1.5rem] ${
                  index === 1 ? 'sm:mt-10' : index === 2 ? 'sm:-mt-4' : ''
                }`}
              >
                <div className='relative aspect-[4/5]'>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes='(max-width: 640px) 100vw, 33vw'
                    className='object-cover transition-transform duration-700 group-hover:scale-105'
                    style={{ objectPosition: 'center 60%' }}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent' />
                </div>
                <figcaption className='absolute bottom-0 left-0 right-0 p-5'>
                  <h3 className='text-xl font-bold'>{item.title}</h3>
                  <p className='mt-1 text-sm text-white/75'>
                    {item.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className='px-4 py-12 sm:px-6 md:px-8 md:py-20'>
        <div className='mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 rounded-[2rem] bg-green p-7 text-white sm:p-10 md:flex-row md:items-center'>
          <div>
            <p className='text-xs font-bold uppercase tracking-[0.25em] text-light-yellow'>
              Madrid, C/ Doctor Esquerdo 180
            </p>
            <h2 className='mt-3 max-w-lg text-3xl font-bold leading-tight'>
              Tu desayuno favorito está a un café de distancia.
            </h2>
          </div>
          <Link
            href='/contact'
            className='min-h-12 shrink-0 rounded-full bg-white px-6 py-3 text-sm font-bold text-green transition-colors hover:bg-light-yellow hover:text-dark-green'
          >
            Cómo llegar <span className='ml-1'>→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

function StepHeading({
  number,
  title,
  description,
  inverted = false
}: {
  number: string
  title: string
  description: string
  inverted?: boolean
}) {
  return (
    <div className='mb-6 flex items-center gap-3 sm:gap-4'>
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
          inverted
            ? 'bg-light-yellow text-dark-green'
            : 'bg-dark-green text-white'
        }`}
      >
        {number}
      </span>
      <div>
        <p
          className={`text-xl font-bold ${inverted ? 'text-white' : 'text-dark-green'}`}
        >
          {title}
        </p>
        <p
          className={`mt-1 text-sm ${inverted ? 'text-white/65' : 'text-brown/60'}`}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

function BaseGroup({
  title,
  description,
  category,
  options,
  selectedId,
  onSelect
}: {
  title: string
  description: string
  category: BaseOption['category']
  options: BaseOption[]
  selectedId: string
  onSelect: (option: BaseOption) => void
}) {
  return (
    <div>
      <div className='mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <h3 className='text-lg font-bold text-dark-green'>{title}</h3>
          <p className='mt-1 text-sm text-brown/60'>{description}</p>
        </div>
        <div className='flex w-fit gap-2 text-xs font-bold'>
          <span className='rounded-full bg-beige px-3 py-1.5 text-brown'>
            Normal {formatPrice(breakfastPrices[category].normal)}
          </span>
          <span className='rounded-full bg-green/10 px-3 py-1.5 text-green'>
            Especial {formatPrice(breakfastPrices[category].special)}
          </span>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-3 sm:gap-5'>
        {options.map(option => (
          <BaseCard
            key={option.id}
            option={option}
            selected={option.id === selectedId}
            onSelect={() => onSelect(option)}
          />
        ))}
      </div>
    </div>
  )
}

function BaseCard({
  option,
  selected,
  onSelect
}: {
  option: BaseOption
  selected: boolean
  onSelect: () => void
}) {
  return (
    <button
      type='button'
      aria-pressed={selected}
      onClick={onSelect}
      className={`group w-full overflow-hidden rounded-2xl border-2 text-left transition-all active:scale-[0.98] ${
        selected
          ? 'border-green bg-green/5 shadow-md ring-2 ring-green/20'
          : 'border-brown/10 bg-[#fcf8f1] hover:-translate-y-0.5 hover:border-green/40 hover:shadow-md'
      }`}
    >
      <span
        className={`relative block aspect-[4/3] overflow-hidden ${
          option.kind === 'photo' ? 'bg-brown' : 'bg-[#e9e0d0]'
        }`}
      >
        <Image
          src={option.image}
          alt={option.name}
          fill
          sizes='(max-width: 640px) 50vw, (max-width: 1280px) 50vw, 33vw'
          className={`transition-transform duration-500 group-hover:scale-105 ${
            option.kind === 'photo' ? 'object-cover' : 'object-contain p-2'
          }`}
          style={
            option.kind === 'photo'
              ? { objectPosition: 'center 63%' }
              : undefined
          }
        />
        {selected && (
          <span className='absolute left-2 top-2 rounded-full bg-green px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white sm:left-3 sm:top-3 sm:px-3'>
            Elegido
          </span>
        )}
      </span>
      <span className='block p-3 sm:p-5'>
        <span className='flex items-start justify-between gap-2'>
          <span className='block text-sm font-bold leading-tight text-dark-green sm:text-lg'>
            {option.name}
          </span>
          <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm leading-none sm:h-7 sm:w-7 sm:text-lg ${
              selected
                ? 'bg-green text-white'
                : 'border border-green/40 text-green'
            }`}
            aria-hidden='true'
          >
            {selected ? '✓' : '+'}
          </span>
        </span>
        <span className='mt-2 block text-xs leading-5 text-brown/65 sm:text-sm sm:leading-6'>
          {option.description}
        </span>
      </span>
    </button>
  )
}

function DrinkOption({
  category,
  price,
  drinks,
  selected,
  onSelect
}: {
  category: DrinkCategory
  price: number
  drinks: Drink[]
  selected: boolean
  onSelect: () => void
}) {
  const isSpecial = category === 'special'
  const title = isSpecial ? 'Bebida especial' : 'Bebida normal'

  return (
    <div
      className={`rounded-2xl p-3 transition-colors sm:p-4 ${
        selected ? 'bg-white/15' : 'bg-white/5'
      }`}
    >
      <button
        type='button'
        aria-pressed={selected}
        onClick={onSelect}
        className={`flex min-h-12 w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
          selected
            ? isSpecial
              ? 'border-light-yellow bg-light-yellow text-dark-green'
              : 'border-green bg-green text-white'
            : 'border-white/20 bg-transparent text-white hover:border-white/50'
        }`}
      >
        <span>
          <span className='block font-bold'>{title}</span>
          <span
            className={`mt-0.5 block text-xs ${
              selected && isSpecial ? 'text-dark-green/70' : 'text-white/60'
            }`}
          >
            {isSpecial ? 'Opciones de la carta' : 'Café, té o infusión'}
          </span>
        </span>
        <span className='shrink-0 text-sm font-bold'>{formatPrice(price)}</span>
      </button>
      <ul className='mt-4 space-y-2 px-1'>
        {drinks.map(drink => (
          <li
            key={drink.name}
            className='flex items-start gap-2 text-sm text-white/80'
          >
            <span className='mt-1 text-light-yellow' aria-hidden='true'>
              •
            </span>
            <span>
              {drink.name}
              {drink.detail && (
                <span className='text-white/50'> ({drink.detail})</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ExtrasPanel({
  enabled,
  isToast,
  selectedNames,
  onToggle
}: {
  enabled: boolean
  isToast: boolean
  selectedNames: string[]
  onToggle: (extra: Extra) => void
}) {
  return (
    <aside className='rounded-[1.75rem] border border-brown/10 bg-white p-4 shadow-sm sm:p-6 md:rounded-[2rem] md:p-8'>
      <StepHeading
        number='03'
        title='Añade extras'
        description='Disponibles para acompañar tus tostadas.'
      />
      {enabled ? (
        <div className='space-y-2'>
          {extras.map(extra => {
            const selected = selectedNames.includes(extra.name)
            return (
              <button
                key={extra.name}
                type='button'
                aria-pressed={selected}
                onClick={() => onToggle(extra)}
                className={`flex min-h-12 w-full items-center justify-between gap-3 rounded-xl border px-3 py-2.5 text-left text-sm transition-colors ${
                  selected
                    ? 'border-green bg-green/10 text-dark-green'
                    : 'border-brown/10 bg-[#fcf8f1] text-brown/80 hover:border-green/40'
                }`}
              >
                <span className='flex items-center gap-3 font-medium'>
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-sm ${
                      selected
                        ? 'bg-green font-bold text-white'
                        : 'border border-green/40 text-green'
                    }`}
                    aria-hidden='true'
                  >
                    {selected ? '✓' : '+'}
                  </span>
                  {extra.name}
                </span>
                <span className='font-bold text-green'>
                  +{formatPrice(extra.price)}
                </span>
              </button>
            )
          })}
        </div>
      ) : isToast ? (
        <div className='rounded-2xl bg-beige p-5'>
          <p className='font-bold text-dark-green'>
            Esta opción no admite extras.
          </p>
          <p className='mt-2 text-sm leading-6 text-brown/70'>
            El croissant con mermelada ya viene servido con su acompañamiento.
          </p>
        </div>
      ) : (
        <div className='rounded-2xl bg-beige p-5'>
          <p className='font-bold text-dark-green'>
            Los extras van con las tostadas.
          </p>
          <p className='mt-2 text-sm leading-6 text-brown/70'>
            Cambia a una de las dos tostadas para añadir jamón, queso, aguacate
            o atún a tu desayuno.
          </p>
        </div>
      )}
    </aside>
  )
}

function BreakfastSummary({
  base,
  drinkCategory,
  selectedExtras,
  total
}: {
  base: BaseOption
  drinkCategory: DrinkCategory
  selectedExtras: Extra[]
  total: number
}) {
  const drinkLabel =
    drinkCategory === 'special' ? 'bebida especial' : 'bebida normal'

  return (
    <section
      className='mt-6 rounded-[1.75rem] bg-green p-5 text-white shadow-lg shadow-green/20 sm:p-6 md:mt-8 md:rounded-[2rem] md:p-8'
      aria-live='polite'
      aria-label='Resumen del desayuno seleccionado'
    >
      <div className='flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <p className='text-xs font-bold uppercase tracking-[0.25em] text-light-yellow'>
            Tu desayuno
          </p>
          <h3 className='mt-2 text-2xl font-bold'>{base.name}</h3>
          <p className='mt-1 text-sm text-white/80'>
            Con {drinkLabel}
            {selectedExtras.length > 0 && (
              <> · {selectedExtras.map(extra => extra.name).join(', ')}</>
            )}
          </p>
          {base.category === 'toast' && (
            <p className='mt-2 text-xs text-white/65'>
              {base.allowsExtras
                ? 'Los extras se suman al precio base.'
                : 'Esta opción no admite extras.'}
            </p>
          )}
        </div>
        <div className='flex items-center justify-between gap-4 sm:block sm:text-right'>
          <p className='text-xs uppercase tracking-wide text-white/65'>Total</p>
          <p className='text-3xl font-bold'>{formatPrice(total)}</p>
        </div>
      </div>
      <div className='mt-6 border-t border-white/20 pt-5'>
        <p className='text-sm leading-6 text-white/85'>
          ¿Ya tienes tu combinación? Enséñanos este resumen en la barra: allí
          hacemos tu pedido y puedes pagar directamente.
        </p>
      </div>
    </section>
  )
}
