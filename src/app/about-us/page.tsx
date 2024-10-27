import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Users, Award } from "lucide-react"
import Image from "next/image"

export default function AboutUs() {
   return (
      <div className="container mx-auto px-4 py-8">
         <h1 className="text-3xl font-bold text-center mb-8">Про нас</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
               <h2 className="text-2xl font-semibold mb-4">Ласкаво просимо до Chill4U</h2>
               <p className="text-lg mb-4">
                  Chill4U - це не просто туристична агенція, це ваш надійний партнер у світі подорожей та пригод. Ми пропонуємо унікальний досвід, який дозволяє нашим клієнтам відкривати нові горизонти та створювати незабутні спогади.
               </p>
               <p className="text-lg">
                  Наша місія - зробити подорожі доступними, захоплюючими та безпечними для кожного. Ми віримо, що кожна подорож - це можливість для особистого росту та розширення світогляду.
               </p>
            </div>
            <div className="relative h-64 md:h-96">
               <Image
                  src="https://files.oaiusercontent.com/file-9SCxuYYYsKSqcyFvDdL7S4nU?se=2024-10-27T20%3A09%3A40Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D895ac657-5251-4ca0-b568-36276bd69912.webp&sig=Q00j5GYu%2B2mMwgQP6rmEfhq4uLtivxb%2Bz/5wA5WJYYY%3D"
                  alt="Команда Chill4U"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
               />
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
               <CardContent className="flex flex-col items-center p-6">
                  <MapPin className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Широкий вибір напрямків</h3>
                  <p className="text-center">Від екзотичних пляжів до захоплюючих міських пригод - ми маємо все для вашого ідеального відпочинку.</p>
               </CardContent>
            </Card>
            <Card>
               <CardContent className="flex flex-col items-center p-6">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Персоналізований підхід</h3>
                  <p className="text-center">Ми розуміємо, що кожен мандрівник унікальний, тому створюємо індивідуальні маршрути для кожного клієнта.</p>
               </CardContent>
            </Card>
            <Card>
               <CardContent className="flex flex-col items-center p-6">
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Досвід та якість</h3>
                  <p className="text-center">З нами ви отримуєте не лише подорож, а й гарантію якості та підтримку досвідчених фахівців.</p>
               </CardContent>
            </Card>
         </div>

         <div className="bg-gray-100 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">Наша історія</h2>
            <p className="text-lg mb-4">
               Chill4U була заснована в 2010 році групою ентузіастів, які мріяли зробити подорожі доступними та захоплюючими для кожного. Починаючи з невеликого офісу в Києві, ми виросли до міжнародної компанії, яка обслуговує тисячі задоволених клієнтів щороку.
            </p>
            <p className="text-lg">
               Наш успіх базується на простому принципі: ми ставимося до кожного клієнта як до особливого гостя, забезпечуючи індивідуальний підхід та високоякісний сервіс на кожному етапі подорожі.
            </p>
         </div>
      </div>
   )
}