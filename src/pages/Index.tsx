import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [serverNumber, setServerNumber] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (type: string) => {
    setIsLoading(true);
    // Симуляция поиска
    setTimeout(() => {
      const mockResults = [
        { id: 1, name: type === 'monsters' ? 'Циклоп' : type === 'castles' ? 'Замок Варвара' : 'Золотые залежи', coordinates: '245,678', level: type === 'monsters' ? 15 : type === 'castles' ? 25 : 8 },
        { id: 2, name: type === 'monsters' ? 'Дракон' : type === 'castles' ? 'Крепость Теней' : 'Железная руда', coordinates: '189,432', level: type === 'monsters' ? 20 : type === 'castles' ? 30 : 12 },
        { id: 3, name: type === 'monsters' ? 'Гидра' : type === 'castles' ? 'Башня Мага' : 'Серебряные жилы', coordinates: '567,234', level: type === 'monsters' ? 18 : type === 'castles' ? 22 : 10 },
      ];
      setSearchResults(mockResults);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-evony-dark via-evony-purple to-evony-dark text-white">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-evony-purple/80 to-evony-dark/80 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="mb-6">
            <Icon name="Target" size={64} className="mx-auto mb-4 text-evony-orange" />
          </div>
          <h1 className="font-orbitron text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-evony-orange to-orange-400 bg-clip-text text-transparent">
            EVONY
          </h1>
          <h2 className="font-orbitron text-2xl md:text-3xl font-semibold mb-4 text-gray-200">
            COORDINATES FINDER
          </h2>
          <p className="font-roboto text-lg text-gray-300 max-w-2xl mx-auto">
            Найдите координаты монстров, вражеских замков и залежей ресурсов в игре Evony.
            Просто введите номер сервера и начните поиск.
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 bg-gray-900/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-orbitron text-xl text-white flex items-center gap-2">
                <Icon name="Search" size={20} className="text-evony-orange" />
                Поиск координат
              </CardTitle>
              <CardDescription className="text-gray-400">
                Введите номер сервера для поиска координат
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-6">
                <div className="flex-1">
                  <Label htmlFor="server" className="text-gray-300 mb-2 block font-roboto">
                    Номер сервера
                  </Label>
                  <Input
                    id="server"
                    type="number"
                    placeholder="Например: 1234"
                    value={serverNumber}
                    onChange={(e) => setServerNumber(e.target.value)}
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-evony-orange"
                  />
                </div>
              </div>
              
              <Tabs defaultValue="monsters" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-gray-800 border-gray-600">
                  <TabsTrigger value="monsters" className="data-[state=active]:bg-evony-orange data-[state=active]:text-white">
                    <Icon name="Skull" size={16} className="mr-2" />
                    Монстры
                  </TabsTrigger>
                  <TabsTrigger value="castles" className="data-[state=active]:bg-evony-orange data-[state=active]:text-white">
                    <Icon name="Castle" size={16} className="mr-2" />
                    Замки
                  </TabsTrigger>
                  <TabsTrigger value="resources" className="data-[state=active]:bg-evony-orange data-[state=active]:text-white">
                    <Icon name="Gem" size={16} className="mr-2" />
                    Ресурсы
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="monsters" className="mt-6">
                  <div className="text-center">
                    <Button 
                      onClick={() => handleSearch('monsters')} 
                      disabled={!serverNumber || isLoading}
                      className="bg-evony-orange hover:bg-orange-600 text-white font-roboto px-8 py-3 text-lg"
                    >
                      {isLoading ? 'Поиск...' : 'Найти монстров'}
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="castles" className="mt-6">
                  <div className="text-center">
                    <Button 
                      onClick={() => handleSearch('castles')} 
                      disabled={!serverNumber || isLoading}
                      className="bg-evony-orange hover:bg-orange-600 text-white font-roboto px-8 py-3 text-lg"
                    >
                      {isLoading ? 'Поиск...' : 'Найти замки'}
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="resources" className="mt-6">
                  <div className="text-center">
                    <Button 
                      onClick={() => handleSearch('resources')} 
                      disabled={!serverNumber || isLoading}
                      className="bg-evony-orange hover:bg-orange-600 text-white font-roboto px-8 py-3 text-lg"
                    >
                      {isLoading ? 'Поиск...' : 'Найти ресурсы'}
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Results */}
          {searchResults.length > 0 && (
            <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-orbitron text-xl text-white flex items-center gap-2">
                  <Icon name="MapPin" size={20} className="text-evony-orange" />
                  Результаты поиска
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Найденные координаты на сервере {serverNumber}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {searchResults.map((result) => (
                    <div key={result.id} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-evony-orange/20 rounded-full flex items-center justify-center">
                          <Icon name="Target" size={20} className="text-evony-orange" />
                        </div>
                        <div>
                          <h3 className="font-roboto font-semibold text-white">{result.name}</h3>
                          <p className="text-gray-400 text-sm">Уровень {result.level}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="bg-evony-orange text-white font-mono text-lg px-3 py-1">
                          {result.coordinates}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 bg-gray-900/50 border-t border-gray-700 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-gray-400 font-roboto">
            🚀 Сделано с помощью <span className="text-evony-orange font-semibold">Поехали!</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;