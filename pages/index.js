import { useState } from 'react';
import Layout from '../components/Layout';
import Tabs from '../components/Tabs';
import Introduction from '../components/Introduction';
import Mission from '../components/Mission';
import Philosophy from '../components/Philosophy';
import Aesthetic from '../components/Aesthetic';
import UserExperience from '../components/UserExperience';
import Outreach from '../components/Outreach';
import Webcam from '../components/Webcam';

export default function Home() {
  const tabs = [
    {
      label: 'Introduction',
      content: <Introduction />
    },
    {
      label: 'Mission & Purpose',
      content: <Mission />
    },
    {
      label: 'Core Philosophy',
      content: <Philosophy />
    },
    {
      label: 'Aesthetic Vision',
      content: <Aesthetic />
    },
    {
      label: 'User Experience',
      content: <UserExperience />
    },
    {
      label: 'Outreach & Impact',
      content: <Outreach />
    },
    {
      label: 'Webcam',
      content: <Webcam />
    }
  ];

  return (
    <Layout title="beforeagi.org">
      <Tabs tabs={tabs} defaultTab={0} />
    </Layout>
  );
}
