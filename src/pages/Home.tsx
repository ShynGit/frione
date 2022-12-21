import {
    faBars,
    faVideo,
    faPhone,
    faEllipsis,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Home = () => {
    const [openSideBar, setOpenSideBar] = useState<Boolean>(false);
    console.log(openSideBar);

    return (
        <div className="grid grid-cols-12 w-screen h-screen max-h-screen relative">
            <div
                className={`md:col-span-3 overflow-scroll h-full border md:inline-block ${
                    openSideBar
                        ? "absolute w-9/12 bg-gray-200 md:relative md:w-full"
                        : "hidden"
                }`}
            >
                <h1 className="font-bold text-5xl text-left p-10 pb-0 ">
                    Frione
                </h1>
                <div className="md:hidden absolute top-10 right-8">
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="w-8 h-8"
                        onClick={() => setOpenSideBar(false)}
                    />
                </div>
                <div>Search bar</div>
                <div>Friend chat</div>
                <nav>icon icon icon</nav>
            </div>
            <div className="md:col-span-9 h-full col-span-12">
                <div className="flex py-5 px-7 items-center justify-between bg-white/50">
                    <div className="flex items-center">
                        <div className="md:hidden">
                            <FontAwesomeIcon
                                icon={faBars}
                                className="w-8 h-8"
                                onClick={() => setOpenSideBar(true)}
                            />
                        </div>
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full border ml-7"></div>
                            <p className="font-semibold text-xl ml-3">Name</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <FontAwesomeIcon icon={faVideo} className="w-8 h-8" />
                        <FontAwesomeIcon icon={faPhone} className="w-6 h-6" />
                        <FontAwesomeIcon
                            icon={faEllipsis}
                            className="w-8 h-8"
                        />
                    </div>
                </div>
                <div>
                    <div className="h-[85vh] overflow-y-scroll">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus animi eum voluptates necessitatibus blanditiis
                        fugiat amet itaque eligendi, ex laudantium, illo,
                        repudiandae vel dolorum nisi nobis obcaecati accusamus
                        voluptatum quod. Quaerat reiciendis rerum nihil dicta
                        obcaecati possimus hic, eaque suscipit excepturi
                        numquam, voluptas voluptate non explicabo vero!
                        Perspiciatis laboriosam maxime fuga, sit suscipit minus
                        quos voluptatibus eum sunt, vitae dolores. Id dolores
                        error quibusdam minima voluptatem exercitationem
                        aspernatur eligendi aut, illum modi unde quos cupiditate
                        asperiores maiores ipsam tempora quisquam ab eius
                        corrupti nostrum fugit repellendus commodi earum
                        obcaecati. Autem. Quis non odio repudiandae deleniti
                        beatae nobis in odit est fugiat? Aliquam consequatur
                        quidem ratione commodi ab voluptas voluptatum, autem
                        quos quia sint numquam quam nisi ad tempora labore
                        consequuntur. Repudiandae explicabo asperiores ullam,
                        quaerat laboriosam ex fuga reiciendis minima quo
                        doloribus labore temporibus, earum repellendus quos id
                        ratione quibusdam consequuntur. Incidunt consectetur
                        odio perferendis temporibus et beatae maxime quod.
                        Tenetur, dignissimos fugiat atque ab suscipit laudantium
                        in, odio ratione quod aspernatur tempore? Ut facilis,
                        magni quasi harum dolorem odit provident fugit
                        consectetur laudantium! Culpa ratione non consequatur
                        aliquid accusamus. Non porro aliquid quidem itaque
                        deserunt quaerat corporis consectetur tenetur velit
                        eaque iste excepturi eum illum, deleniti perferendis
                        doloremque quasi similique nisi accusantium totam
                        sapiente sunt. Temporibus laboriosam veritatis totam!
                        Maxime maiores culpa eaque, inventore fugiat recusandae
                        illum est aspernatur aperiam, quae repellendus modi eum
                        ad, cumque beatae numquam! Eveniet dolore minima
                        voluptates consequatur tempora iure aliquam voluptas
                        exercitationem repellendus. Illo et laboriosam
                        perspiciatis reprehenderit vero culpa explicabo a labore
                        fugiat possimus rem sint adipisci beatae autem, commodi
                        doloremque officia expedita earum accusantium eum. Nihil
                        iste quasi repellat officiis laboriosam. Laborum minima
                        culpa odit saepe eligendi optio voluptatem blanditiis
                        voluptate quo fugiat corrupti alias possimus, accusamus
                        enim consequuntur quasi dolor obcaecati expedita soluta
                        ducimus sapiente. Ea a voluptatem fugiat nulla. Iusto
                        placeat nisi optio? Id temporibus minus ea accusamus non
                        exercitationem nostrum commodi ipsum optio dicta, cumque
                        labore dolorum, quidem ipsa laboriosam modi ullam amet
                        sunt fugit? Incidunt, minima accusamus. Ad, laudantium
                        at cupiditate laborum repellendus, iste voluptatum
                        mollitia dicta quod doloribus doloremque eveniet error
                        nam asperiores officia ea. Hic provident debitis neque
                        assumenda aut voluptatibus! Fugit, explicabo porro.
                        Voluptates. Rerum, ipsam! Blanditiis adipisci
                        consectetur nesciunt necessitatibus ab repudiandae unde
                        mollitia ullam distinctio delectus? Ab porro itaque
                        sunt. Autem fugit velit dolorum sit in deserunt, ullam
                        vel dicta et iure? Excepturi fugiat ducimus, tempora
                        placeat ex sapiente! Libero, maiores! Libero non,
                        accusamus architecto dignissimos voluptatibus veniam
                        aspernatur iste itaque, quae temporibus, harum
                        perferendis soluta molestiae eos voluptatem? Doloremque,
                        veritatis aperiam! Tenetur nisi earum iusto, recusandae
                        iure sapiente impedit harum fugit quas. Reprehenderit
                        officiis distinctio ad corrupti sed quae, ipsum placeat,
                        eligendi iure illo maxime tempore, enim quas! Quasi,
                        assumenda quibusdam. Unde nesciunt libero nostrum
                        placeat veritatis quaerat saepe eius expedita nihil,
                        labore accusantium qui distinctio esse dolore sequi
                        consequuntur sed rerum eum laudantium reiciendis tempora
                        nobis. Consectetur quia fugiat nobis! Ad tempora qui
                        quaerat, voluptatem iste, perferendis totam quibusdam
                        quae est eaque consectetur. Tempora cumque porro a
                        doloribus illum sapiente iure, corrupti dolorum!
                        Commodi, sunt culpa. Ipsam quam quos possimus! Quibusdam
                        explicabo illum consectetur sapiente quas possimus
                        nostrum, unde delectus quod quae dolore ea et cupiditate
                        totam commodi excepturi qui, quidem, facilis
                        necessitatibus! Harum earum recusandae excepturi quasi
                        tempora fugit. Commodi, consectetur neque corrupti
                        incidunt laboriosam eius quod non voluptate dicta atque
                        autem ipsa vel, numquam possimus officia perferendis
                        aspernatur explicabo temporibus pariatur dolore illo.
                        Sequi suscipit nobis consequuntur rem. Eveniet
                        reprehenderit repellat, magni tempora odio, cumque vel
                        rerum quis quas ut nesciunt aut recusandae quia
                        obcaecati suscipit voluptatum! Inventore dolor pariatur
                        libero tempora esse porro doloribus recusandae facere
                        eligendi? Harum debitis sed a qui ipsam id repellendus
                        iusto aspernatur, deserunt laboriosam. Laborum cum,
                        saepe, qui commodi quis aspernatur omnis ducimus fuga
                        adipisci accusamus porro eos nisi enim. Rerum, eligendi!
                        Rerum fuga ex beatae ad numquam dolorem quia nesciunt,
                        facere harum soluta sit unde eaque quas libero, deserunt
                        provident vero officia delectus assumenda consequuntur
                        ipsam dolore nam. Eveniet, odit provident. Doloremque
                        consequatur ducimus assumenda cumque rem ipsum vel fuga
                        unde blanditiis. Quaerat, porro quos, laudantium
                        adipisci fuga earum eum, magni minus corporis natus
                        alias consequatur ad nulla distinctio veritatis soluta!
                        Et laboriosam exercitationem quo. Id dolorum
                        consequuntur esse adipisci minima sapiente. Quod laborum
                        similique voluptatibus rerum laudantium? Saepe
                        doloremque, similique magnam cum atque at! Molestiae
                        consequuntur eos saepe debitis dolorem? Quae hic, animi
                        voluptatum nesciunt dolor suscipit eum explicabo. Eos,
                        corporis pariatur ex sequi inventore sint ut, culpa vero
                        dolores nobis, temporibus labore velit asperiores nulla
                        libero illo atque aut. Explicabo, quo esse? At non
                        itaque officiis ab et! Minus hic, unde, pariatur
                        voluptatibus corporis suscipit cum officiis totam
                        eveniet provident qui laudantium earum accusamus tenetur
                        tempora. Maxime, voluptate recusandae. Sequi sint
                        dignissimos eveniet voluptate aliquam esse est, nisi
                        possimus error rem voluptatum. Numquam atque, et vitae
                        accusamus itaque ipsa asperiores quos in doloremque
                        nihil architecto, perspiciatis quae? Quidem, neque!
                        Ratione debitis accusamus suscipit incidunt explicabo
                        facere labore, aperiam totam eaque! Quisquam veritatis,
                        laudantium tempora, debitis error velit porro neque
                        eaque quidem libero sint corporis quo nemo repellendus
                        soluta. Excepturi! Itaque labore, sapiente quae laborum,
                        aperiam impedit debitis voluptates corporis, ad
                        obcaecati nostrum totam ducimus. Laudantium dolorem
                        voluptatum libero fugit nostrum maiores quidem rerum ex.
                        Recusandae voluptates nostrum at quas! Minima nihil
                        esse, aliquam dolorem sunt harum beatae quos et
                        aspernatur, eos, veritatis repellendus. Obcaecati eaque
                        asperiores consequuntur dolore similique harum
                        laudantium voluptate provident? Ab provident sequi ad
                        eius! Quod? Ipsam placeat, dolore ratione iure,
                        dignissimos fugit, impedit voluptates ex explicabo optio
                        repellat odio eos nihil architecto ipsum veritatis
                        distinctio neque quam animi fugiat iusto. Repellat,
                        sunt. Placeat, veniam numquam. Nobis expedita tempora
                        dolore illum voluptas quasi? Velit temporibus delectus
                        quas sed accusamus, a officiis ipsa eligendi aut sint
                        suscipit, laudantium excepturi rem ipsum maiores natus!
                        Facilis, dolore eius? Possimus. Molestias ipsam
                        excepturi doloremque mollitia eaque maxime placeat illo,
                        molestiae vero eveniet nobis modi nostrum quisquam odit
                        sed magnam corrupti. Alias, laudantium deleniti qui sint
                        tenetur animi cum nesciunt. Hic. Fuga nam nisi veniam
                        odio architecto doloribus sunt, nostrum cupiditate non!
                        Deleniti cumque nihil autem quibusdam in reprehenderit
                        culpa fugit corporis quis ad? Quia ullam similique
                        alias, vitae odio quo? Qui eum tenetur fuga distinctio
                        facilis animi. Minus eum molestias quas, alias molestiae
                        minima tenetur veniam eaque, quisquam aut, sed dolore.
                        Pariatur delectus accusantium autem neque aliquid odio
                        aliquam soluta! Earum eius amet ab iure quo? Ipsam ad
                        nemo molestias hic ex vero quo dolores praesentium.
                        Porro, aut vitae. Consequatur debitis magni sint placeat
                        tenetur et, distinctio quod vel aliquid! Nobis facere
                        harum commodi! Laudantium officia sit error culpa
                        consectetur placeat aliquam et exercitationem eveniet
                        quia doloremque blanditiis, dolore nisi vel ex provident
                        voluptatibus, vitae sint ipsa quibusdam vero. Vel?
                        Aliquid iste in amet ad error dolorem eaque nobis a,
                        consequuntur rem quidem? Nulla suscipit assumenda
                        incidunt voluptas, delectus beatae, corrupti nobis ut
                        sapiente hic ipsam, nesciunt aspernatur soluta
                        consequuntur! Consequuntur maiores, est ducimus ullam
                        atque sapiente vero sit, perferendis in ad temporibus
                        magnam qui? Earum, inventore quasi, minima maxime nihil,
                        nulla dolorum nobis hic numquam veritatis reiciendis
                        dolorem! Officiis? Eveniet quod recusandae, quia natus
                        magnam amet voluptas minus sint animi nulla reiciendis
                        sapiente ducimus debitis quos dolorum. Ratione id
                        repellat quaerat expedita pariatur ad assumenda
                        veritatis maiores, odit impedit. Hic animi dicta
                        repellat. Veniam cumque porro reiciendis blanditiis
                        exercitationem. Aperiam corporis temporibus sed quam ad
                        dolorum nostrum laboriosam, fugiat laudantium at unde
                        quod quibusdam sequi! Commodi nobis nulla laudantium.
                        Itaque quo dolores similique ducimus molestiae nobis
                        perspiciatis obcaecati accusantium reprehenderit, rem
                        repellendus officiis odio magni quia, perferendis,
                        nesciunt nemo laboriosam molestias. Optio vero repellat
                        inventore reprehenderit nisi asperiores natus.
                        Explicabo, ea. Facere iste facilis, odit rerum
                        perspiciatis quae obcaecati tempore illum esse animi
                        explicabo doloremque dolore cumque cum pariatur,
                        deserunt ratione enim voluptatum saepe. Eius culpa
                        dolorem quibusdam error. Minus nihil nam doloremque amet
                        quibusdam culpa doloribus officiis deleniti eveniet
                        consectetur repudiandae, totam harum ipsum aliquam?
                        Inventore aliquid reiciendis nemo, minima praesentium
                        est commodi repellat nesciunt accusantium quo odit.
                        Deserunt laboriosam fuga delectus, blanditiis hic
                        laborum fugit! Distinctio eligendi tempora mollitia
                        labore. Rem voluptatibus neque quasi ducimus omnis
                        labore cupiditate nam minima deserunt, culpa inventore
                        dolorem, sint, placeat laborum. Unde, itaque deleniti
                        ipsum natus ratione impedit voluptas sit. Dicta laborum
                        ad dolorum, quam repudiandae necessitatibus laudantium
                        sequi animi eligendi distinctio illo error deserunt
                        inventore quasi cumque maiores pariatur quas. Placeat
                        officiis, voluptatum repellat quibusdam deserunt sequi
                        autem dolores voluptatibus necessitatibus corporis aut
                        maxime odio velit suscipit perspiciatis delectus
                        incidunt in nam consequuntur iusto totam. Voluptas unde
                        obcaecati iusto harum? Velit aliquam voluptatum culpa,
                        minima nobis architecto esse alias ut neque nulla,
                        veniam molestiae quo magnam, consequatur corrupti.
                        Dolorum eligendi doloremque id deleniti. Ut quo ea odit.
                        Veritatis, voluptates earum. Itaque enim ipsa error nemo
                        similique autem quaerat, nam odio assumenda sapiente sit
                        quo ex expedita architecto animi molestias non eaque
                        asperiores totam placeat? Debitis accusantium tenetur
                        voluptatibus. Rerum, harum! Similique voluptatibus
                        itaque sit odio quibusdam veniam unde aliquid enim
                        perferendis corrupti. Incidunt esse repellendus
                        voluptates debitis. Facere, corrupti repellendus! Quo
                        illum exercitationem saepe odio eos magni molestiae sunt
                        amet? Iste repellat hic, quos ea animi, perspiciatis
                        voluptatibus sed tempora a, dicta optio? Eaque quisquam
                        recusandae nihil nobis numquam tempora, consequuntur
                        quia alias. Rerum unde amet perferendis iure? Non,
                        laboriosam. Porro in voluptates facilis mollitia
                        distinctio praesentium possimus voluptatem labore omnis
                        amet, ipsa dicta architecto molestias velit placeat hic
                        dolorem. Facere quis, quos facilis aspernatur ad iste
                        sit minima eligendi! Ex impedit perferendis atque ab
                        dolorum! Velit, voluptatem iusto! Possimus optio,
                        asperiores voluptatem molestiae dolorum dolor! Sapiente
                        voluptates minus enim maiores praesentium possimus omnis
                        quod. Sequi fugiat corrupti libero voluptates. Sint
                        mollitia obcaecati reiciendis quibusdam corrupti! Nihil
                        dolor quis sint! Accusamus molestias odio dolorem. Ipsum
                        veritatis consequatur distinctio quas, perferendis minus
                        rem praesentium atque ut est laudantium cupiditate,
                        saepe fugiat. Perferendis quibusdam eum vero quas
                        officia ipsam dignissimos totam. Rem facilis, ab
                        eligendi explicabo ratione adipisci, delectus in
                        recusandae natus laudantium impedit voluptate aspernatur
                        vitae sapiente non sed. Repellendus, voluptatum? Fuga
                        esse natus, illum, itaque eaque quia error quisquam
                        libero qui non corrupti obcaecati expedita nobis
                        distinctio odio tenetur repellendus cupiditate veritatis
                        id pariatur! Exercitationem quas consequatur unde
                        tempore? Voluptatibus! Architecto animi neque voluptas?
                        Officiis ex nostrum sit! Consectetur sapiente corrupti
                        commodi voluptatum doloribus odio esse? Obcaecati ab
                        modi officia. Aspernatur quia praesentium incidunt
                        expedita saepe illum eligendi temporibus accusantium!
                        Voluptas aperiam placeat dolores ipsum voluptatibus
                        veritatis vitae, molestias voluptates animi mollitia
                        veniam dolorum neque consectetur ducimus sapiente
                        perspiciatis dignissimos in fugiat ratione itaque, ab
                        modi cumque esse. Ullam, dolores! Odit molestiae
                        voluptatem, ullam et ipsa debitis nemo accusamus modi
                        repellendus aspernatur fugit cum iusto quasi, tenetur
                        perspiciatis omnis? Est, quisquam nesciunt! Quisquam
                        soluta cupiditate repellat quo non officia magni. Cumque
                        facere repudiandae quam quas fuga molestiae excepturi,
                        quis nostrum, quia iste labore. Eligendi quos veniam id
                        tenetur dolores, molestias atque recusandae iure facere
                        distinctio eveniet modi, sint libero exercitationem.
                        Obcaecati libero eius facere voluptatem itaque mollitia
                        molestiae laboriosam eveniet quas modi quis ducimus
                        molestias illum minima quisquam debitis expedita ipsa
                        adipisci accusamus, eaque perferendis sed necessitatibus
                        ab. Deserunt, sit. Possimus itaque placeat dignissimos
                        dolorem maiores totam assumenda, natus ipsa ut rem?
                        Laboriosam amet voluptates accusamus aspernatur nihil
                        necessitatibus, consequuntur alias libero dicta. Aperiam
                        earum repellendus mollitia, quaerat nulla aut. Omnis
                        saepe totam reiciendis ipsa iusto voluptates, eaque
                        animi hic vero maiores exercitationem repudiandae velit
                        facilis pariatur minima. Quam maxime recusandae quidem
                        harum cum ex deserunt sit vitae consequatur commodi. Aut
                        eius reprehenderit porro incidunt delectus enim cumque
                        ut? Quasi, debitis? Vel rem ex adipisci, in deserunt
                        commodi culpa repellat aperiam. Maiores omnis atque
                        corporis error ullam adipisci deserunt neque. Provident
                        saepe repudiandae quidem doloremque autem nemo
                        reiciendis, blanditiis dolore vitae eveniet sunt
                        recusandae. Sed quibusdam doloribus molestiae sequi
                        fugit? Deleniti possimus natus aliquam doloremque
                        laboriosam sed modi et in. Explicabo distinctio id saepe
                        ratione error repellendus quibusdam rem eius quis, ullam
                        aut tempore non delectus rerum itaque, dicta est labore
                        sint voluptatum veniam soluta tempora. Magnam repellat
                        minus ad. Recusandae velit accusamus exercitationem eum
                        similique voluptates quod, fuga possimus sapiente
                        laboriosam. Impedit blanditiis consequuntur, dolorum,
                        ipsa tenetur nobis delectus explicabo laudantium atque,
                        quam illo cupiditate excepturi et incidunt? Quae. Dicta
                        optio veniam voluptate beatae sapiente aliquam delectus
                        alias praesentium aspernatur. Earum, blanditiis expedita
                        dicta, inventore eos, quo voluptas illo eveniet
                        accusamus natus odit? Nesciunt temporibus error porro
                        accusantium perspiciatis? Quis, consectetur aspernatur
                        maiores ut quam officiis cupiditate, corporis commodi,
                        sed atque deleniti vel minus veniam eveniet excepturi
                        totam nobis provident animi. Recusandae ipsam sint nemo
                        perspiciatis odit, doloremque alias? Explicabo dolor
                        modi eum sunt in perferendis libero mollitia, deserunt
                        cum reiciendis aspernatur! Nulla dolor consequuntur
                        porro, culpa repellendus harum saepe tempore deserunt,
                        magnam vero tenetur impedit, possimus provident
                        reprehenderit? Illo ullam libero deleniti enim vero,
                        sequi sed quisquam nemo excepturi doloremque in, vel
                        voluptates optio iusto corrupti quasi fugit perferendis
                        placeat a! Corporis ab consequatur laudantium obcaecati
                        aperiam excepturi. Eius doloremque minus illo repellat
                        placeat explicabo sint nemo, culpa eveniet. Facilis ab
                        culpa magni expedita corporis commodi et nemo quibusdam
                        laudantium, voluptas aliquam, animi velit quod officia,
                        dolore nesciunt. Corporis rem repellat recusandae? Modi
                        alias id facilis enim asperiores ducimus ad ipsa impedit
                        unde fuga accusantium tenetur delectus explicabo
                        incidunt quasi ut, maxime reprehenderit ipsam tempore
                        magni neque laborum! Dolore quo eum minima odio in. Aut
                        laborum accusamus debitis ipsam. Dolorum in eligendi
                        maiores molestiae itaque dolor, nesciunt soluta, quo
                        architecto minima explicabo minus expedita laudantium
                        quidem facere sequi? Ipsum eos voluptas pariatur dolorum
                        itaque! Sint est repellat tempora aliquam asperiores
                        architecto, hic impedit, iusto, blanditiis culpa veniam
                        facilis aut? Assumenda alias eum explicabo mollitia!
                        Aliquid consequatur minima dolorem. Possimus sapiente
                        dolorum incidunt odio. Maiores dicta ipsum deleniti
                        recusandae fugiat accusamus deserunt dolores aliquam
                        eius illo neque aspernatur nesciunt dignissimos vel
                        error, dolore aut ut suscipit hic ea soluta. Earum nulla
                        eligendi aperiam ea exercitationem recusandae at quam
                        vitae adipisci voluptatibus id, quasi sunt, sapiente sit
                        magnam. Labore alias ipsum pariatur rem aspernatur
                        praesentium corporis eius modi. Porro, illum? Molestiae
                        quam perferendis tempore minus harum? Provident omnis
                        nisi ex odio ipsa veniam quis, deleniti dolore quidem
                        unde magni repellat aperiam optio recusandae enim maxime
                        fuga id dolorem modi voluptatem. Eveniet saepe, harum
                        possimus, molestias, nam ratione natus vel rerum placeat
                        consequatur unde! Doloremque incidunt aperiam sequi
                        ipsum eum quibusdam asperiores, nostrum amet recusandae
                        ipsa expedita dicta numquam voluptas enim! Ut adipisci
                        assumenda aperiam dicta, praesentium obcaecati dolores
                        suscipit rem placeat ullam nam temporibus, voluptatem
                        harum voluptatibus hic est quae a fugit illo aliquam
                        magnam ea dolorem laudantium reiciendis? Molestiae!
                        Ducimus, facere. Sequi voluptas quis ducimus, in
                        assumenda laudantium. Minima quibusdam facere incidunt
                        ipsam pariatur atque autem eveniet aliquam quas sunt et
                        a, minus nulla veritatis ab magnam nesciunt deleniti?
                        Voluptatum quisquam dolor iure dolorem itaque earum
                        similique minus qui? Totam porro omnis vel natus
                        similique repellendus tempore! Nesciunt, id! Consectetur
                        dolor aliquid molestiae veniam nam laboriosam accusamus
                        eius dolores! Dolorem nulla velit a sapiente at nam
                        omnis! Dolore molestias cupiditate dolor quam officiis,
                        ea voluptatibus sit at similique quas quisquam iure fuga
                        consequatur rem! Veniam sequi reprehenderit molestias
                        accusamus. Necessitatibus, nisi dolores fugit sequi
                        quibusdam corporis dolorem quod delectus inventore qui
                        facilis expedita beatae pariatur aliquam labore
                        recusandae tempore dignissimos eius est repudiandae quia
                        ut porro? Neque, accusamus. Ullam! Placeat libero
                        laboriosam architecto molestias delectus iure incidunt?
                        Vitae quam laboriosam minima quos voluptates veniam!
                        Rerum cumque necessitatibus perferendis laboriosam
                        quibusdam, aperiam ducimus porro nobis unde perspiciatis
                        beatae nostrum tenetur! Dolorem eaque quod ipsum esse ex
                        vitae, reprehenderit cupiditate aut, natus reiciendis
                        earum fugiat quo ipsa dignissimos vero, ullam non
                        dolores sapiente beatae possimus quisquam iusto.
                        Doloribus maiores pariatur fuga? Iusto sapiente vitae
                        molestias. Veritatis voluptatem, molestiae quas modi
                        dolor provident ipsum esse iste, eveniet vel qui
                        reprehenderit similique natus hic fugit cum alias quod
                        assumenda maiores. Natus, harum ipsam. Veritatis cumque
                        numquam fugiat, nostrum iste tenetur placeat dignissimos
                        ipsam, adipisci quasi iure alias ab harum architecto
                        minus consequatur quibusdam ea praesentium dolorem unde
                        similique quos excepturi impedit molestias? Quis.
                        Voluptatibus dolore rem eos asperiores nam, nostrum
                        iusto ipsum voluptatem saepe distinctio tempore? Quos
                        reiciendis nobis consectetur ea omnis corrupti id fuga,
                        tempore ad quia minus quibusdam quaerat earum? Nulla.
                        Maxime quia quisquam natus suscipit dignissimos fugiat
                        non incidunt aliquid! Labore accusamus quos, debitis
                        earum itaque veritatis, optio numquam facere quasi natus
                        quaerat, asperiores harum temporibus eos accusantium
                        sunt omnis. Qui beatae illo ratione, exercitationem
                        iusto enim nostrum voluptas natus cumque asperiores
                        sequi veniam amet animi tempora mollitia dolor fugit
                        soluta laboriosam sit ipsa? Nihil cum id quas excepturi
                        rerum. Nemo corporis repudiandae omnis rerum enim
                        tempore iusto sequi. Rerum dicta, fuga impedit ducimus
                        libero cum aspernatur at laudantium commodi doloremque
                        similique quae aliquid quis. Laborum, consectetur
                        quisquam. Molestias, inventore! Expedita illo commodi
                        architecto? Alias iure eius molestias odit in sed nihil
                        debitis voluptates. Ducimus, perspiciatis molestiae
                        eveniet culpa ex deleniti dolorem consequatur, possimus,
                        veniam amet aspernatur reprehenderit dolorum. Aliquid!
                        Ab unde, sint suscipit voluptatibus nihil, qui debitis
                        necessitatibus ipsa ad amet repellat a quam praesentium.
                        Quod id pariatur minima nemo magnam, perferendis quae
                        beatae? Nemo magni reprehenderit sapiente inventore.
                        Libero, quaerat ipsa. Veritatis alias soluta rem, cumque
                        aut incidunt. Voluptates consectetur vitae odit corporis
                        nihil nemo aliquid, nobis, cupiditate vel cum
                        perferendis aperiam dolorum minus quas ducimus
                        aspernatur itaque? Animi ad ducimus tempora tempore
                        laudantium harum. Magni dolorem a ratione obcaecati vel
                        deleniti voluptatum nobis. Nemo laudantium est soluta,
                        dolores fugiat maxime dolorum possimus nobis nam magnam
                        iure facere. Sint optio labore itaque aperiam quibusdam
                        commodi possimus alias placeat quas quaerat, recusandae
                        nam doloribus adipisci atque dolores? Necessitatibus
                        doloribus consequuntur sit adipisci quae numquam illum
                        rerum placeat distinctio repellendus? Ullam quos amet
                        culpa ducimus sit, sint a dolore aperiam! Obcaecati,
                        omnis quos minus iste ullam nihil, voluptas dolorem
                        aliquid, accusamus praesentium nesciunt? Amet ullam
                        ipsam nemo quae recusandae provident! Eos architecto
                        obcaecati, ullam sunt id adipisci dicta pariatur
                        perferendis ut aperiam dolore distinctio corrupti totam
                        placeat exercitationem necessitatibus nesciunt nostrum,
                        cumque voluptas. Reiciendis, quia cumque temporibus
                        dolorum commodi nihil. Voluptatem, omnis tenetur dolor
                        numquam blanditiis natus est earum, odio, at voluptas
                        sequi veniam officia obcaecati. Distinctio saepe quidem
                        tenetur commodi. Laborum, blanditiis! Voluptas
                        accusantium optio eveniet harum consequuntur sunt?
                    </div>
                    <div className="absolute bottom-0 -z-10">Input bar</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
