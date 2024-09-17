import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function AboutSkills() {
  return (
    <Card className="flex justify-center mt-5 sm:mt-0 gap-4 border-none">
      <CardContent className="flex p-3 flex-wrap gap-4 justify-center items-center sm:w-72 ">
        <Badge variant="secondary" className="text-sm bg-transparent hover:bg-blue-600 border cursor-pointer border-blue-600 text-blue-600 hover:text-white">
          HTML
        </Badge>
        <Badge variant="secondary" className="text-sm bg-transparent hover:bg-blue-600 border cursor-pointer border-blue-600 text-blue-600 hover:text-white">
          CSS
        </Badge>
        <Badge variant="secondary" className="text-sm bg-transparent hover:bg-blue-600 border cursor-pointer border-blue-600 text-blue-600 hover:text-white">
          JavaScript
        </Badge>
        <Badge variant="secondary" className="text-sm bg-transparent hover:bg-blue-600 border cursor-pointer border-blue-600 text-blue-600 hover:text-white">
          React
        </Badge>
        <Badge variant="secondary" className="text-sm bg-transparent hover:bg-blue-600 border cursor-pointer border-blue-600 text-blue-600 hover:text-white">
          Bootstrap
        </Badge>
        <Badge variant="secondary" className="text-sm bg-transparent hover:bg-blue-600 border cursor-pointer border-blue-600 text-blue-600 hover:text-white">
          Tailwind
        </Badge>
        <Badge variant="secondary" className="text-sm bg-transparent hover:bg-blue-600 border cursor-pointer border-blue-600 text-blue-600 hover:text-white">
          Node
        </Badge>
        <Badge variant="secondary" className="text-sm bg-transparent hover:bg-blue-600 border cursor-pointer border-blue-600 text-blue-600 hover:text-white">
          Git
        </Badge>
      </CardContent>
    </Card>
  );
}

export default AboutSkills;
