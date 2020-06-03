import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import Interview from '../svg/Interview';
import SportPR from '../svg/SportPR';
import Coaching from '../svg/Coaching';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Продвижение бизнеса в новых экономических условиях
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Приобщитесь к опыту и знаниям ведущих экспертов в области журналистики и PR
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Свяжитесь с нами</Button>
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Специализация</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">PR</p>
              <p className="mt-4">
                Работа с профессиональными боксерами и промоутерами. Разработка PR-стратегии
                профессиональных спортсменов.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Персональный коучинг</p>
              <p className="mt-4">
                Редактор СМИ. Управление командой журналистов. Привлечение и удержание
                рекламодателей. Работа с "селебрити". PR в профессиональном спорте.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Тренинги</p>
              <p className="mt-4">
                Наш работа основывается на сочетании научных разработок и креативного подхода для
                реализации задач наших клиентов.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <div className="container mx-auto text-center">
      <h2 className="text-3xl lg:text-5xl font-semibold">ПОПУЛЯРНЫЕ ТРЕНИНГИ</h2>
    </div>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Разговор на миллион</h3>
          <h4 className="font-semibold leading-tight">Секреты успешного интервью</h4>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Человек, который много лет работает в СМИ, подтвердит вам, что "звёзды" такие же точно
            люди, как и все мы.
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Узнать больше</Button>
          </p>
        </div>
      }
      secondarySlot={<Interview />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Спортивный PR</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Серия тренингов по PR в профессиональном спорте — полный пакет.
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Узнать больше</Button>
          </p>
        </div>
      }
      secondarySlot={<SportPR />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Коучинг</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Индивидуальный профессиональный бизнес-коучинг.
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Узнать больше</Button>
          </p>
        </div>
      }
      secondarySlot={<Coaching />}
    />
    {/* <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section> */}
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">Клиенты о нас</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Давайте работать вместе!</h3>
      <p className="mt-8 text-xl font-light">Максимально эффективно решим поставленные задачи.</p>
      <p className="mt-8">
        <Button size="xl">Свяжитесь с нами</Button>
      </p>
    </section>
  </Layout>
);
