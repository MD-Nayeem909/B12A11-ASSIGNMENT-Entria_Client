import ContestHeader from "./ContestHeader";
import ContestInfoCard from "./ContestInfoCard";
import ContestTabs from "./ContestTabs";
import ContestSidebar from "./ContestSidebar";

export default function ContestDetailsPage() {
  return (
    <div className="w-full min-h-screen bg-base-200 p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ContestHeader />
          <ContestInfoCard />
          <ContestTabs />
        </div>
        <div className="lg:col-span-1">
          <ContestSidebar />
        </div>
      </div>
    </div>
  );
}
