import { ref, watch } from 'vue'

interface GeneralData {
    id: string;
    email: string;
    log: string;
    type: 'rbot' | 'aseeker' | 'tchanger' | '';
    faction: 'Select' | 'Autobot' | 'Decepticon' | 'Mercenary' | 'Civilian'
}

interface NotifsData {
    symlink: boolean;
    nreceptors: boolean;
    cog: boolean
}

interface PrivacyData {
    SearchEngineIndexing: boolean,
    visibility : 'Private' | 'Public'
}

interface DataMaps {
    general: GeneralData,
    notifs: NotifsData,
    privacy: PrivacyData
}

type keyMaps = keyof DataMaps

const initData = <T extends keyMaps>(key : T, defaults: DataMaps[T]) => {
    const stored = localStorage.getItem(key);

    return stored !== null
    ? JSON.parse(stored)
    : defaults
}

const watcher = <T extends keyMaps>(key : T) => {
    return (value : DataMaps[T]) => {
        localStorage.setItem(key, JSON.stringify(value))
    }
}

const general = ref<GeneralData>(
        initData('general', {
        id: '',
        email:'',
        log:'Resident of Iacon',
        type: 'rbot',
        faction: 'Civilian'
    })
)

const notifs = ref<NotifsData>(
    initData('notifs', {
    symlink: true,
    nreceptors: false,
    cog: false
    })
)

watch(notifs, watcher('notifs'), {deep: true})

const privacy = ref<PrivacyData>(
    initData('privacy',{
    SearchEngineIndexing: false,
    visibility : 'Private'
    })
)

watch(privacy, watcher('privacy'), {deep: true})

export default  function tabsData() {
    return {
        general,
        notifs,
        privacy
    }
}